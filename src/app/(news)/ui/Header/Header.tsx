"use client";
import React, { FC, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

import { IconsEnum, LinksEnum } from "@/types";
import { Icon, Logo } from "@/components";
import { getDataFromLS } from "@/utils";
import { useModal } from "@/hooks";

import { Menu, Search, Theme } from "./components";
import styles from "./Header.module.scss";

const links = [
  { name: "Home", href: LinksEnum.Home, icon: IconsEnum.Home },
  { name: "Favorite", href: LinksEnum.Favorite, icon: IconsEnum.Heart },
  { name: "Read", href: LinksEnum.Read, icon: IconsEnum.Book },
];

const Header: FC = () => {
  const [checked, setChecked] = useState(false);
  const props = useModal();

  const pathName = usePathname();

  useEffect(() => {
    const isDarkTheme = getDataFromLS<boolean>("darkTheme");
    setChecked(isDarkTheme || false);
  }, []);

  useEffect(() => {
    checked
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [checked]);

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
        <Suspense>
          <Search />
        </Suspense>
        <button
          className={`${styles["header__menu"]} menu-button-t`}
          onClick={() => props.setActive(true)}
        >
          <Icon size={24} icon={IconsEnum.Menu} removeInlineStyle />
        </button>
        <Theme
          classNames={styles["header__theme"]}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <Menu
        links={links}
        checked={checked}
        setChecked={setChecked}
        {...props}
      />
    </header>
  );
};

export default Header;
