"use client";
import React, { FC, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Dayjs } from "dayjs";

import { useOutsideEventHandler } from "@/hooks";
import { ConstantsEnum, LinksEnum } from "@/types";
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

  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const pathLength = pathname.split("/").length;

  const onHandleChange = (newValue: Dayjs) => {
    setValue(newValue);

    const params = new URLSearchParams(searchParams);
    params.delete(ConstantsEnum.Filter);
    params.set(ConstantsEnum.Page, "1");
    params.set(ConstantsEnum.Date, newValue.format("YYYYMMDD"));
    replace(
      `${pathLength === 2 ? LinksEnum.Home : pathname}?${params.toString()}`
    );

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
