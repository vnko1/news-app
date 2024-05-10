"use client";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { useProfileContext } from "@/context";
import { IconsEnum, LinksEnum } from "@/types";
import { Icon } from "@/components";

import Auth from "@/services/firebase/Auth";

import { loginSchema, regSchema } from "./schema";
import { AuthFormProps } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";

const authProvider = new Auth();

const AuthForm: FC<AuthFormProps> = ({ fields, btnText, auth }) => {
  const router = useRouter();
  const { setUser, user } = useProfileContext();
  const { register, handleSubmit, setError, clearErrors, formState } = useForm({
    resolver: zodResolver(auth === "register" ? regSchema : loginSchema),
  });
  const { errors } = formState;

  const [hidePass, setHidePass] = useState(true);

  useEffect(() => {
    if (user) router.push(LinksEnum.Home);
  }, [router, user]);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        clearErrors();
        let userCred: UserCredential | FirebaseError;

        if (auth === "register")
          userCred = await authProvider.register(data.email, data.password);
        else userCred = await authProvider.login(data.email, data.password);

        if ("code" in userCred)
          return setError("button", {
            type: "custom",
            message: userCred.code.split("/")[1].split("-").join(" "),
          });
        const idToken = await userCred.user.getIdToken();

        setUser({
          name: userCred.user.displayName,
          uid: userCred.user.uid,
          email: userCred.user.email,
          picture: userCred.user.photoURL,
        });

        fetch("/api/login", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        router.push(LinksEnum.Home);
      })}
      className={styles["form"]}
    >
      {fields.map((field) => {
        return (
          <label key={field.label} className={styles["form__label"]}>
            <span className={styles["text"]}>{field.label}</span>
            <span className={styles["form__wrapper"]}>
              <input
                {...register(field.name)}
                id={field.name}
                name={field.name}
                type={
                  field.type === "password"
                    ? hidePass
                      ? "password"
                      : "text"
                    : field.type
                }
                className={styles["form__field"]}
              />
              {field.type === "password" ? (
                <button
                  className={styles["icon-btn"]}
                  onClick={() => setHidePass(!hidePass)}
                >
                  <Icon
                    size={24}
                    icon={hidePass ? IconsEnum.EYE : IconsEnum.CLOSE_EYE}
                  />
                </button>
              ) : null}
            </span>
            {errors[field.name] ? (
              <span className={styles["error"]}>
                {errors[field.name]?.message as string}
              </span>
            ) : null}
          </label>
        );
      })}

      <button className={styles["button"]} type="submit">
        {btnText}
      </button>
      {errors["button"] ? (
        <span className={styles["error"]}>
          {errors["button"]?.message as string}
        </span>
      ) : null}
    </form>
  );
};

export default AuthForm;
