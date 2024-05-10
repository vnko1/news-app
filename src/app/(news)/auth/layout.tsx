import React, { ReactNode } from "react";
import styles from "./auth.module.scss";
import { AuthByGoogle } from "./ui";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <section className={styles["auth"]}>
        <div className={`layout ${styles["auth__wrapper"]}`}>{children}<AuthByGoogle/></div>
      </section>
    </main>
  );
}

export default AuthLayout;
