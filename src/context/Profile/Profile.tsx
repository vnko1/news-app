"use client";
import React, { FC, useState } from "react";
import { IUser } from "@/types";
import { ProfileContext } from "./hooks";
import { ProfileProviderProps } from "./Profile.type";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
