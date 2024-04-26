import { Dispatch, ReactNode, SetStateAction } from "react";

export type MenuProps = {
  backDropClassName?: string;
  modalClassName?: string;
  activeClassName?: string;
  active: boolean;
  children: ReactNode;
  setActive: Dispatch<SetStateAction<boolean>>;
};
