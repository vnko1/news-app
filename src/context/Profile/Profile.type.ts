import { Dispatch, ReactNode, SetStateAction } from "react";
import { DBResponseType, IUser } from "@/types";

export type ProfileContextType = {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<null | IUser>>;
  favorites: null | DBResponseType;
  favId: string[];
  setFavId: Dispatch<SetStateAction<string[]>>;
  setFavorites: Dispatch<SetStateAction<null | DBResponseType>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type ProfileProviderProps = { children: ReactNode };
