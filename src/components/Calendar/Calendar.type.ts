import { Dispatch, SetStateAction } from "react";
import { Dayjs } from "dayjs";
import { IModal } from "@/types";

export type CalendarProps = {
  value: Dayjs | null;
  setValue: Dispatch<SetStateAction<Dayjs | null>>;
  classNames?: string;
} & IModal;
