import React, { FC } from "react";
import { Button } from "@/components";
import { DatePickerProps } from "./DatePicker.type";
import styles from "./DatePicker.module.scss";
import { IconsEnum } from "@/types";

const DatePicker: FC<DatePickerProps> = () => {
  return (
    <div className={styles["picker"]}>
      <p className={styles["picker__label"]}>Search date news</p>
      <Button
        icon
        customIcon={{ icon: IconsEnum.Calendar, size: 18 }}
        className={styles["picker__button"]}
      >
        DATE
      </Button>
    </div>
  );
};

export default DatePicker;
