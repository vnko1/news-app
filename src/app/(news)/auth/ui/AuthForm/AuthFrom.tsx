"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodTypeAny } from "zod";

import { AuthFormProps } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";
import { login, signUp } from "@/lib";
import { UserCredential } from "firebase/auth";
import { useProfileContext } from "@/context";

const AuthFrom = <T extends ZodTypeAny>({
  fields,
  schema,
  btnText,
  auth,
}: AuthFormProps<T>) => {
  type Schema = z.infer<typeof schema>;
  const { setUser } = useProfileContext();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data: Schema) => {
    let userCred: UserCredential;
    if (auth === "register") userCred = await signUp(data);
    else userCred = await login(data);

    setUser({
      name: userCred.user.displayName || "",
      uid: userCred.user.uid,
      email: userCred.user.email || "",
      picture: userCred.user.photoURL || "",
    });

    fetch("/api/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await userCred.user.getIdToken()}`,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
      {fields.map((field) => (
        <label key={field.label} className={styles["form__label"]}>
          <span className={styles["text"]}>{field.label}</span>
          <input
            {...register(field.name)}
            id={field.name}
            name={field.name}
            type={field.type}
            className={styles["form__field"]}
          />
        </label>
      ))}

      <button type="submit">{btnText}</button>
    </form>
  );
};

export default AuthFrom;
