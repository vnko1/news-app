"use client";
import React, { FC, useRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Dayjs } from "dayjs";

import { useOutsideEventHandler } from "@/hooks";
import { Modal } from "@/components";

import { CalendarProps } from "./Calendar.type";
import styles from "./Calendar.module.scss";

const Calendar: FC<CalendarProps> = ({
  value,
  setValue,
  classNames,
  ...props
}) => {
  const modalRef = useRef(null);
  useOutsideEventHandler(modalRef, props.close);

  const onHandleChange = (newValue: Dayjs) => {
    setValue(newValue);
    props.close();
  };

  return (
    <Modal
      {...props}
      nodeRef={modalRef}
      backDropClassName={`${styles["calendar"]} ${classNames}`}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar disableFuture value={value} onChange={onHandleChange} />
      </LocalizationProvider>
    </Modal>
  );
};

export default Calendar;
