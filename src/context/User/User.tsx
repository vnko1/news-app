"use client";
import React, { FC, useState } from "react";
import { IUser } from "@/types";
import { UserContext } from "./hooks";
import { UserProviderProps } from "./User.type";

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
