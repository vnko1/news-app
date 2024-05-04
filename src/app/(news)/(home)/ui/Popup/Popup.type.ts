import { ChangeEvent } from "react";
import { Category, IModal } from "@/types";

export type PopupProps = {
  classNames?: string;
  categories: Array<Category>;
  selectedValue: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & IModal;
