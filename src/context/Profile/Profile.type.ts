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
  read: null | DBResponseType;
  setRead: Dispatch<SetStateAction<null | DBResponseType>>;
  readId: string[];
  setReadId: Dispatch<SetStateAction<string[]>>;
};

export type ProfileProviderProps = { children: ReactNode };
