"use client";
import React, { FC } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.type";
import styles from "./Button.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconsEnum } from "@/types";

const Button: FC<ButtonProps> = ({
  isActive,
  children,
  classNames,
  icon = false,
  color = "primary",
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