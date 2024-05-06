"use client";
import React, { FC, useEffect, useState } from "react";
import { DBResponseType, IUser } from "@/types";
import { data } from "@/lib";
import { ProfileContext } from "./hooks";
import { ProfileProviderProps } from "./Profile.type";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [favorites, setFavorites] = useState<null | DBResponseType>(null);
  const [favId, setFavId] = useState<string[]>([]);

  useEffect(() => {
    if (user?.uid) {
      data(user.uid).then((res) => {
        setFavorites(res);
        setFavId(Object.keys(res || []));
      });
    }
  }, [user?.uid, favId.length]);

  return (
    <ProfileContext.Provider
      value={{
        user,
        favorites,
        favId,
        setFavId,
        setFavorites,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
