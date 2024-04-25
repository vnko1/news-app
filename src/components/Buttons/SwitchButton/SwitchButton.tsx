"use client";
import React, { FC } from "react";

import { SwitchButtonProps } from "./SwitchButton.type";
import styles from "./SwitchButton.module.scss";
import { Icon } from "@/components";
import { IconsEnum } from "@/types";

const SwitchButton: FC<SwitchButtonProps> = ({ classNames }) => {
  return (
    <label className={`${styles["switch"]} ${classNames}`}>
      <span>
        <Icon size={20} icon={IconsEnum.Light} />
      </span>
      <input type="checkbox" checked name="theme" />
      <i></i>
      <span>
        <Icon size={20} icon={IconsEnum.Dark} />
      </span>
    </label>
  );
};

export default SwitchButton;
