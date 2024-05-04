import { IModal } from "@/types";
import { ReactNode, RefObject } from "react";

export type ModalProps = {
  children: ReactNode;
  nodeRef?: RefObject<HTMLDivElement>;
} & Omit<IModal, "close">;
