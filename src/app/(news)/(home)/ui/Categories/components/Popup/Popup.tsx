"use client";
import React, { FC, useRef } from "react";
import { Modal } from "@/components";
import { PopupProps } from "./Popup.type";
import styles from "./Popup.module.scss";
import { useOutsideEventHandler } from "@/hooks";

const Popup: FC<PopupProps> = ({ close, ...props }) => {
  const modalRef = useRef(null);
  useOutsideEventHandler(modalRef, close);
  return (
    <Modal
      nodeRef={modalRef}
      activeClassName={styles["active"]}
      backDropClassName={styles["popup"]}
      modalClassName={styles["popup__wrapper"]}
      {...props}
    >
      MODAL
    </Modal>
  );
};

export default Popup;
