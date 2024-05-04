import { IModal } from "@/types";
import { Dispatch, SetStateAction } from "react";

type LinkType = { name: string; href: string; icon: string };

export type MenuProps = {
  links: LinkType[];
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
} & IModal;
