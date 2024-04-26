import { Dispatch, SetStateAction } from "react";

export type ThemeProps = {
  classNames?: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};
