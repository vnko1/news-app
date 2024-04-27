import { Dispatch, ReactNode, SetStateAction } from "react";

export type ModalProps = {
  children: ReactNode;
  backDropClassName?: string;
  modalClassName?: string;
  activeClassName?: string;
  active: boolean;
  visible: boolean;
  portal?: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
