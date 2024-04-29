"use client";
import React, { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { useModal } from "@/hooks";
import { ConstantsEnum, IconsEnum } from "@/types";
import { Button, Calendar } from "@/components";

import { DateFilterProps } from "./DateFilter.type";
import styles from "./DateFilter.module.scss";
import { useSearchParams } from "next/navigation";

const DateFilter: FC<DateFilterProps> = () => {
  const searchParams = useSearchParams();
  const currentDate = searchParams.get(ConstantsEnum.Date) || Date.now();
  const [value, setValue] = useState<Dayjs | null>(dayjs(currentDate));
  const props = useModal();

  const handleClick = () => {
    if (!props.active) return props.setActive(true);
    props.close();
  };

  return (
    <div className={styles["filter"]}>
      <p className={styles["filter__label"]}>Search date news</p>
      <Button
        icon
        customIcon={{ icon: IconsEnum.Calendar, size: 18 }}
        onClick={handleClick}
      >
        {value?.format("DD/MM/YYYY")}
      </Button>
      <Calendar
        {...props}
        value={value}
        setValue={setValue}
        classNames={styles["filter__calendar"]}
      />
    </div>
  );
};

export default DateFilter;
