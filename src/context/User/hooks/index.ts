"use client";
import { createContext, useContext } from "react";
import { UserContextType } from "../User.type";

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("userContext has to be used within <UserContext.Provider>");
  }

  return userContext;
};
