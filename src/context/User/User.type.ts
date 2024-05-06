import { Dispatch, ReactNode, SetStateAction } from "react";
import { IUser } from "@/types";

export type UserContextType = {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<null | IUser>>;
};

export type UserProviderProps = { children: ReactNode };
