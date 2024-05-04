"use client";
import React, { FC } from "react";
import cn from "classnames";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

import { ButtonProps } from "./Button.type";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  isActive,
  children,
  classNames,
  icon = false,
  color = "primary",
  customIcon,
  ...props
}) => {
  const buttonClassNames = cn(
    styles["button"],
    {
      [styles["primary"]]: color === "primary",
      [styles["secondary"]]: color === "secondary",
      [styles["active"]]: isActive,
    },
    classNames
  );

  return (
    <button className={buttonClassNames} {...props}>
      {customIcon ? (
        <Icon
          icon={customIcon.icon}
          size={customIcon.size}
          removeInlineStyle
          className={styles["custom-icon"]}
        />
      ) : null}
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
