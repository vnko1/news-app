import { DatePickerProps as DatePickerType } from "react-date-picker";

export type DatePickerProps = {
  classNames?: string;
} & Partial<DatePickerType>;
