"use client";
import React, { FC, useState } from "react";
import { ThemeTogglerProps } from "./ThemeToggler.type";
import styles from "./ThemeToggler.module.scss";
import { Icon, SwitchButton } from "@/components";

const ThemeToggler: FC<ThemeTogglerProps> = ({ classNames }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className={`${styles["toggler"]} ${classNames}`}>
      <Icon />
      <SwitchButton name="theme" checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default ThemeToggler;
