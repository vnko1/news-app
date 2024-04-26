import { Dispatch, SetStateAction } from "react";

export type ThemeTogglerProps = {
  classNames?: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};
