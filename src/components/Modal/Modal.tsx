"use client";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import cn from "classnames";

import { MenuProps } from "./Modal.type";
import styles from "./Modal.module.scss";
import { useSwipe } from "@/hooks";

const Menu: FC<MenuProps> = ({
  setActive,
  children,
  active,
  activeClassName,
  backDropClassName,
  modalClassName,
}) => {
  const [visible, setVisible] = useState(false);

  useSwipe(close);

  useEffect(() => {
    if (active) {
      setVisible(true);
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active]);

  useEffect(() => {
    const handlePressESC = (e: { code: string }) => {
      if (e.code === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function close() {
    setVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  }

  const onHandleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const backDropClassNames = cn(styles["backdrop"], backDropClassName, {
    [styles["active"]]: visible,
    [activeClassName || ""]: visible,
  });

  if (!active) return null;
  return (
    <div className={backDropClassNames} onClick={onHandleBackdropClick}>
      <div className={`${styles["modal"]} ${modalClassName}`}>{children}</div>
    </div>
  );
};

export default Menu;
