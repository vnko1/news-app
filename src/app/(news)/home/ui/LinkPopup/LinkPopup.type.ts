import { Category, IModal } from "@/types";

export type LinkPopupProps = {
  classNames?: string;
  categories: Array<Category>;
} & IModal;
