"use client";
import React, { FC } from "react";

import { Button } from "@/components";

import { DateFilterProps } from "./DateFilter.type";
import styles from "./DateFilter.module.scss";
import { IconsEnum } from "@/types";

const DateFilter: FC<DateFilterProps> = () => {
  return (
    <div className={styles["filter"]}>
      <p className={styles["filter__label"]}>Search date news</p>
      <Button icon customIcon={{ icon: IconsEnum.Calendar, size: 18 }}>
        date
      </Button>
    </div>
  );
};

export default DateFilter;
