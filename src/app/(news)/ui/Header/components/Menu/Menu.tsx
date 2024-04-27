"use client";
import React, { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import cn from "classnames";

import { IconsEnum } from "@/types";
import { Icon, Logo, Modal } from "@/components";

import { Theme } from "../";

import { MenuProps } from "./Menu.type";
import styles from "./Menu.module.scss";

const Menu: FC<MenuProps> = ({ setActive, setVisible, links, ...props }) => {
  const { push } = useRouter();

  const pathName = usePathname();

  function close() {
    setVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 350);
  }

  function navHandler(pathName: string) {
    close();
    push(pathName);
  }

  return (
    <Modal
      {...props}
      portal
      setActive={setActive}
      setVisible={setVisible}
      backDropClassName={`${styles["backdrop"]} menu-t`}
      modalClassName={styles["menu"]}
      activeClassName={styles["active"]}
    >
      <div className={styles["head"]}>
        <Logo />
        <button onClick={() => close()}>
          <Icon
            size={24}
            removeInlineStyle
            className={`${styles["cross"]} icon-t`}
            icon={IconsEnum.Cross}
          />
        </button>
      </div>
      <div className={styles["content"]}>
        <nav className={styles["nav"]}>
          <ul className={styles["nav__list"]}>
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => navHandler(link.href)}
                  className={cn(styles["link-btn"], {
                    [styles["active"]]: link.href === pathName,
                  })}
                >
                  <span>
                    <Icon
                      size={18}
                      icon={link.icon}
                      removeInlineStyle
                      className={styles["icon"]}
                    />
                  </span>
                  {link.name}
                  <Icon
                    icon={IconsEnum.Arrow}
                    size={16}
                    removeInlineStyle
                    className={`${styles["icon"]} ${styles["icon__arrow"]}`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles["theme"]}>
          <Theme {...props} />
        </div>
      </div>
    </Modal>
  );
};

export default Menu;
