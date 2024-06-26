"use client";
import { createContext, useContext } from "react";
import { ProfileContextType } from "../Profile.type";

export const ProfileContext = createContext<ProfileContextType | null>(null);

export const useProfileContext = () => {
  const profileContext = useContext(ProfileContext);

  if (!profileContext) {
    throw new Error(
      "profileContext has to be used within <ProfileContext.Provider>"
    );
  }

  return profileContext;
};
