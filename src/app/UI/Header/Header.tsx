import React, { FC } from "react";

import { Logo } from "@/components";

import styles from "./Header.module.scss";
import { Search } from "./components";

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={`layout ${styles["header__container"]}`}>
        <Logo />
        <Search />
      </div>
    </header>
  );
};

export default Header;
