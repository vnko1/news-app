import React, { ReactNode } from "react";
import styles from "./auth.module.scss";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <section className={styles["auth"]}>
        <div className={`layout ${styles["auth__wrapper"]}`}>{children}</div>
      </section>
    </main>
  );
}

export default AuthLayout;
