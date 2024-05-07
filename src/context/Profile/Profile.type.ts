import { Dispatch, ReactNode, SetStateAction } from "react";
import { IUser } from "@/types";

export type ProfileContextType = {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<null | IUser>>;
  favId: string[];
  setFavId: Dispatch<SetStateAction<string[]>>;
  readId: string[];
  setReadId: Dispatch<SetStateAction<string[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type ProfileProviderProps = { children: ReactNode };
