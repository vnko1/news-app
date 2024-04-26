"use client";
import React, { FC } from "react";

import { IconsEnum } from "@/types";
import { Icon, Logo, Modal } from "@/components";

import { MenuProps } from "./Menu.type";
import styles from "./Menu.module.scss";
import Link from "next/link";

const Menu: FC<MenuProps> = ({ setActive, setVisible, links, ...props }) => {
  function close() {
    setVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 350);
  }

  return (
    <Modal
      {...props}
      setActive={setActive}
      setVisible={setVisible}
      backDropClassName={`${styles["backdrop"]} layout menu-t`}
      modalClassName={styles["menu"]}
      activeClassName={styles["active"]}
    >
      <div className={styles["head"]}>
        <Logo />
        <button onClick={() => close()}>
          <Icon
            size={24}
            removeInlineStyle
            className={`${styles["icon"]} icon-t`}
            icon={IconsEnum.Cross}
          />
        </button>
      </div>
      <div className={styles["content"]}>
        <nav>
          <ul className={styles["nav__list"]}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Modal>
  );
};

export default Menu;
