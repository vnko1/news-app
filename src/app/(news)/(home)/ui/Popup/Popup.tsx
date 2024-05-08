"use client";
import React, { FC, useRef } from "react";

import { Modal, RadioButton } from "@/components";
import { useOutsideEventHandler } from "@/hooks";

import { PopupProps } from "./Popup.type";
import styles from "./Popup.module.scss";

const Popup: FC<PopupProps> = ({
  close,
  categories,
  selectedValue,
  ...props
}) => {
  const modalRef = useRef(null);
  useOutsideEventHandler(modalRef, close);

  return (
    <Modal
      nodeRef={modalRef}
      activeClassName={styles["active"]}
      backDropClassName={styles["popup"]}
      modalClassName={styles["popup__wrapper"]}
      disableScroll
      {...props}
    >
      <ul className={styles["categories-list"]}>
        {categories.map((category) => (
          <li key={category.section}>
            <RadioButton
              onChange={props.onChange}
              name="category"
              value={category.section}
              label={category.display_name}
              checked={selectedValue === category.section}
            />
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default Popup;
