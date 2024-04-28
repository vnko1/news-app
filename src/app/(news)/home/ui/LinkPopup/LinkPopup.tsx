"use client";
import React, { FC, useRef } from "react";

import { LinkButton, Modal } from "@/components";
import { useOutsideEventHandler } from "@/hooks";

import { LinkPopupProps } from "./LinkPopup.type";
import styles from "./LinkPopup.module.scss";

const LinkPopup: FC<LinkPopupProps> = ({ close, categories, ...props }) => {
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
      <ul className={styles["categories-list"]}>
        {categories.map((category) => (
          <li key={category.section}>
            <LinkButton name={category.display_name} href={category.section} />
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default LinkPopup;
