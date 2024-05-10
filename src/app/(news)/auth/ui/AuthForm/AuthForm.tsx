"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { login, signUp } from "@/lib";
import { useProfileContext } from "@/context";
import { LinksEnum } from "@/types";

import { loginSchema, regSchema } from "./schema";
import { AuthFormProps, FormValues } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";

const AuthForm: FC<AuthFormProps> = ({ fields, btnText, auth }) => {
  const router = useRouter();
  const { setUser } = useProfileContext();
  const { register, handleSubmit, setError, clearErrors, formState } = useForm({
    resolver: zodResolver(auth === "register" ? regSchema : loginSchema),
  });
  const { errors } = formState;

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        clearErrors();
        let userCred;

        if (auth === "register") userCred = await signUp(data as FormValues);
        else userCred = await login(data as FormValues);

        if ("code" in userCred) {
          setError("button", {
            type: "custom",
            message: userCred.code.split("/")[1].split("-").join(" "),
          });
        }
        // setUser({
        //   name: userCred.user.displayName,
        //   uid: userCred.user.uid,
        //   email: userCred.user.email,
        //   picture: userCred.user.photoURL,
        // });

        // fetch("/api/login", {
        //   method: "POST",
        //   headers: {
        //     Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        //   },
        // });

        // router.push(LinksEnum.Home);
      })}
      className={styles["form"]}
    >
      {fields.map((field) => {
        return (
          <label key={field.label} className={styles["form__label"]}>
            <span className={styles["text"]}>{field.label}</span>
            <input
              {...register(field.name)}
              id={field.name}
              name={field.name}
              type={field.type}
              className={styles["form__field"]}
            />
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
