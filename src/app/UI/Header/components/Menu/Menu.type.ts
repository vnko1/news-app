import { Dispatch, SetStateAction } from "react";

type LinkType = { name: string; href: string; icon: string };

export type MenuProps = {
  active: boolean;
  links: LinkType[];
  visible: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
