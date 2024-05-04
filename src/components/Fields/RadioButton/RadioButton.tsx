import React, { FC } from "react";
import cn from "classnames";

import { RadioButtonProps } from "./RadioButton.type";
import styles from "./RadioButton.module.scss";

const RadioButton: FC<RadioButtonProps> = ({
  label,
  variant = "text",
  ...props
}) => {
  const fieldClassNames = cn(styles["custom-field"], {
    [styles["text"]]: variant === "text",
    [styles["outlined"]]: variant === "outlined",
  });
  return (
    <label className={styles["radio"]}>
      <input {...props} type="radio" />
      <span className={fieldClassNames}>{label}</span>
    </label>
  );
};

export default RadioButton;
