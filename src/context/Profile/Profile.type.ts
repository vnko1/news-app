import { Dispatch, ReactNode, SetStateAction } from "react";
import { IUser } from "@/types";

export type ProfileContextType = {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<null | IUser>>;
};

export type ProfileProviderProps = { children: ReactNode };
