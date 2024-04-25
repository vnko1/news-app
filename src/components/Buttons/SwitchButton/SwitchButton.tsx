"use client";
import React, { FC, useState } from "react";

import { SwitchButtonProps } from "./SwitchButton.type";
import styles from "./SwitchButton.module.scss";

const SwitchButton: FC<SwitchButtonProps> = ({ classNames }) => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <label className={`${styles["switch"]} ${classNames}`}>
      <input
        onChange={onChange}
        // onChange={onHandleInputChange}
        type="checkbox"
        checked={checked}
        // name={name}
      />
      <i></i>
    </label>
  );
};

export default SwitchButton;
