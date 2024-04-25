"use client";
import React, { FC } from "react";

import { ISwitchButton } from "./SwitchButton.type";
import styles from "./SwitchButton.module.scss";

const SwitchButton: FC<ISwitchButton> = ({ label, classNames }) => {
  return (
    <label className={`${styles["switch"]} ${classNames}`}>
      <input type="checkbox" checked name="theme" />
      <i></i>
      <span>{label}</span>
    </label>
  );
};

export default SwitchButton;
