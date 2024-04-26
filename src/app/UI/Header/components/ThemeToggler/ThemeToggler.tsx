"use client";
import React, { FC } from "react";
import cn from "classnames";

import { IconsEnum } from "@/types";
import { Icon, SwitchButton } from "@/components";
import { setDataToLs } from "@/utils";

import { ThemeTogglerProps } from "./ThemeToggler.type";
import styles from "./ThemeToggler.module.scss";

const ThemeToggler: FC<ThemeTogglerProps> = ({
  classNames,
  checked,
  setChecked,
}) => {
  const handleChange = () => {
    setChecked(!checked);
    setDataToLs({ darkTheme: !checked });
  };

  const textLightClassNames = cn(styles["text"], styles["color"], {
    [styles["active"]]: !checked,
    [styles["inactive"]]: checked,
  });

  const textDarkClassNames = cn(styles["text"], styles["color"], {
    [styles["active"]]: checked,
    [styles["inactive"]]: !checked,
  });

  const iconLightClassNames = cn(styles["icon"], styles["color"], {
    [styles["active"]]: !checked,
    [styles["inactive"]]: checked,
  });

  const iconDarkClassNames = cn(styles["icon"], styles["color"], {
    [styles["active"]]: checked,
    [styles["inactive"]]: !checked,
  });

  return (
    <div className={`${styles["toggler"]} ${classNames}`}>
      <p className={textLightClassNames}>Light</p>
      <Icon
        removeInlineStyle
        size={20}
        icon={IconsEnum.Light}
        className={iconLightClassNames}
      />
      <SwitchButton
        name="theme"
        checked={checked}
        handleChange={handleChange}
      />
      <Icon
        removeInlineStyle
        size={20}
        icon={IconsEnum.Dark}
        className={iconDarkClassNames}
      />
      <p className={textDarkClassNames}>Dark</p>
    </div>
  );
};

export default ThemeToggler;
