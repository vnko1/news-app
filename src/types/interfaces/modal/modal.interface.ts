import { Dispatch, SetStateAction } from "react";

export interface IModal {
  visible: boolean;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  close: () => void;
  backDropClassName?: string;
  modalClassName?: string;
  activeClassName?: string;
  classNames?: string;
  portal?: boolean;
}
