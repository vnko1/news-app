import { Dispatch, SetStateAction } from "react";

export type SwitchButtonProps = {
  classNames?: string;
  name: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};
