"use client";
import React, { FC } from "react";

import { SwitchButtonProps } from "./SwitchButton.type";
import styles from "./SwitchButton.module.scss";

const SwitchButton: FC<SwitchButtonProps> = ({ classNames }) => {
  return (
    <label className={`${styles["switch"]} ${classNames}`}>
      <input className={styles["field"]} type={styles["checkbox"]} />
      <span className={styles["slider"]}></span>
    </label>
  );
};

export default SwitchButton;
