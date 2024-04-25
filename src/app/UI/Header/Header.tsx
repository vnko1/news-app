import React, { FC } from "react";

import { Logo } from "@/components";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={`layout ${styles["header__container"]}`}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
