"use client";
import React, { FC, useEffect, useState } from "react";
import { DBResponseType, IUser } from "@/types";
import { getFavoriteCards, getReadCards } from "@/lib";
import { ProfileContext } from "./hooks";
import { ProfileProviderProps } from "./Profile.type";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [favorites, setFavorites] = useState<null | DBResponseType>(null);
  const [favId, setFavId] = useState<string[]>([]);

  const [read, setRead] = useState<null | DBResponseType>(null);
  const [readId, setReadId] = useState<string[]>([]);

  useEffect(() => {
    if (user?.uid) {
      getFavoriteCards(user.uid).then((res) => {
        console.log("🚀 ~ getFavoriteCards ~ res:", res);
        setFavorites(res);
        setFavId(Object.keys(res || []));
      });
    }
  }, [user?.uid, favId.length]);

  useEffect(() => {
    if (user?.uid) {
      getReadCards(user.uid).then((res) => {
        console.log("🚀 ~ getReadCards ~ res:", res);
        setRead(res);
        setReadId(Object.keys(res || []));
      });
    }
  }, [user?.uid, readId.length]);

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
        read,
        setRead,
        readId,
        setReadId,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
