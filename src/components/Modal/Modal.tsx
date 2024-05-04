"use client";
import React, { FC, MouseEvent, useEffect } from "react";
import cn from "classnames";

import { useSwipe } from "@/hooks";

import { ModalProps } from "./Modal.type";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

const Modal: FC<ModalProps> = ({
  children,
  visible,
  active,
  activeClassName,
  backDropClassName,
  modalClassName,
  portal = false,
  nodeRef,
  classNames,
  setActive,
  setVisible,
}) => {
  useSwipe(close);

  useEffect(() => {
    if (active) {
      setVisible(true);
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active, setVisible]);

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
    }, 350);
  }

  const onHandleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const backDropClassNames = cn(
    styles["backdrop"],
    backDropClassName,
    {
      [styles["active"]]: visible,
      [activeClassName || ""]: visible,
    },
    classNames
  );

  const modal = (
    <div
      ref={nodeRef}
      className={backDropClassNames}
      onClick={onHandleBackdropClick}
    >
      <div className={`${styles["modal"]} ${modalClassName}`}>{children}</div>
    </div>
  );

  if (!active) return null;
  return portal ? createPortal(modal, document.body) : modal;
};

export default Modal;
