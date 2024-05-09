import Link from "next/link";
import { LinksEnum } from "@/types";

import { AuthForm } from "../ui";

import styles from "../auth.module.scss";

const fields = [
  { name: "email", label: "Enter your email", type: "text" },
  { name: "password", label: "Enter your password", type: "password" },
  { name: "repeat_password", label: "Repeat your password", type: "text" },
];

function RegisterPage() {
  return (
    <div className={styles["container"]}>
      <AuthForm
        auth="register"
        btnText="Register Your account"
        fields={fields}
      />
      <Link className={styles["link"]} href={LinksEnum.Login}>
        Sign up if already have an account
      </Link>
    </div>
  );
}

export default RegisterPage;
