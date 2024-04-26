"use client";
import React, { FC } from "react";
import cn from "classnames";

import { setDataToLs } from "@/utils";
import { IconsEnum } from "@/types";
import { Icon, SwitchButton } from "@/components";

import { ThemeProps } from "./Theme.type";
import styles from "./Theme.module.scss";

const Theme: FC<ThemeProps> = ({ classNames, checked, setChecked }) => {
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
    <div className={`${styles["theme"]} ${classNames}`}>
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

export default Theme;
