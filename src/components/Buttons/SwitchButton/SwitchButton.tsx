"use client";
import React, { FC, useState } from "react";

import { SwitchButtonProps } from "./SwitchButton.type";
import styles from "./SwitchButton.module.scss";

const SwitchButton: FC<SwitchButtonProps> = ({ classNames }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className={`${styles["switch"]} ${classNames}`}>
      <input checked className={styles["field"]} type={styles["checkbox"]} />
      <span className={styles["slider"]}></span>
    </label>
  );
};

export default SwitchButton;
