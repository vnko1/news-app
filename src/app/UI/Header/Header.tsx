"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

import { IconsEnum, LinksEnum } from "@/types";
import { Icon, Logo } from "@/components";

import { Menu, Search, ThemeToggler } from "./components";
import styles from "./Header.module.scss";

const links = [
  { name: "Home", href: LinksEnum.Home, icon: IconsEnum.Home },
  { name: "Favorite", href: LinksEnum.Favorite, icon: IconsEnum.Heart },
  { name: "Read", href: LinksEnum.Read, icon: IconsEnum.Book },
];

const Header: FC = () => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const pathName = usePathname();

  return (
    <header className={`${styles["header"]} header-t`}>
      <div className={`layout ${styles["header__container"]}`}>
        <Logo />
        <nav className={styles["header__nav"]}>
          <ul className={styles["nav__list"]}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(styles["link"], {
                    [styles["active-link"]]: link.href === pathName,
                  })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Search />
        <button
          className={`${styles["header__menu"]} menu-button-t`}
          onClick={() => setActive(true)}
        >
          <Icon size={24} icon={IconsEnum.Menu} removeInlineStyle />
        </button>
        <ThemeToggler classNames={styles["header__theme"]} />
      </div>
      <Menu
        active={active}
        setActive={setActive}
        visible={visible}
        setVisible={setVisible}
        links={links}
      />
    </header>
  );
};

export default Header;
