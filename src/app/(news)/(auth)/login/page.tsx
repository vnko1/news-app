import React from "react";
import Link from "next/link";

import { LinksEnum } from "@/types";
import { AuthForm } from "../ui";

import styles from "../auth.module.scss";

const fields = [
  { name: "email", label: "Enter your email", type: "text" },
  { name: "password", label: "Enter your password", type: "password" },
];

const LoginPage = () => {
  return (
    <div className={styles["container"]}>
      <AuthForm auth="login" btnText="Sign In" fields={fields} />
      <Link href={LinksEnum.Register}>Register new account</Link>
    </div>
  );
};

export default LoginPage;
