"use client";
import React, { FC } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.type";
import styles from "./Button.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconsEnum } from "@/types";

const Button: FC<ButtonProps> = ({
  children,
  classNames,
  icon = false,
  variant = "primary",
}) => {
  const buttonClassNames = cn(
    styles["button"],
    {
      [styles["primary"]]: variant === "primary",
      [styles["secondary"]]: variant === "secondary",
    },
    classNames
  );

  return (
    <button className={buttonClassNames}>
      {children}
      {icon ? (
        <Icon
          size={14}
          icon={IconsEnum.Arrow}
          removeInlineStyle
          className={styles["icon"]}
        />
      ) : null}
    </button>
  );
};

export default Button;
