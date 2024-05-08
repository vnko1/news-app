"use client";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "@/types";
import { getFavoriteCards, getReadCards } from "@/lib";
import { ProfileContext } from "./hooks";
import { ProfileProviderProps } from "./Profile.type";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favId, setFavId] = useState<string[]>([]);
  const [readId, setReadId] = useState<string[]>([]);

  useEffect(() => {
    if (user?.uid) {
      setIsLoading(true);
      Promise.all([getFavoriteCards(user.uid), getReadCards(user.uid)])
        .then((res) => {
          const [fav, read] = res;
          setFavId(Object.keys(fav || []));
          setReadId(Object.keys(read || []));
        })
        .finally(() => setIsLoading(false));
    }
  }, [user?.uid, readId.length, favId.length]);

  return (
    <ProfileContext.Provider
      value={{
        user,
        favId,
        isLoading,
        readId,
        setFavId,
        setIsLoading,
        setUser,
        setReadId,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
