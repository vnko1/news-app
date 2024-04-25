import React, { FC } from "react";

import { Icon, Logo, SwitchButton } from "@/components";

import { Search } from "./components";
import styles from "./Header.module.scss";
import { IconsEnum, LinksEnum } from "@/types";
import Link from "next/link";

const links = [
  { name: "Home", href: LinksEnum.Home },
  { name: "Favorite", href: LinksEnum.Favorite },
  { name: "Read", href: LinksEnum.Read },
];

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={`layout ${styles["header__container"]}`}>
        <Logo />
        <nav className={styles["header__nav"]}>
          <ul className={styles["nav__list"]}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles["link"]}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Search />
        <button className={styles["header__menu"]}>
          <Icon size={24} icon={IconsEnum.Menu} />
        </button>
        <SwitchButton classNames={styles["header__theme"]} />
      </div>
    </header>
  );
};

export default Header;
