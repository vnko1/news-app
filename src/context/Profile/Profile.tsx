"use client";
import React, { FC, useEffect, useState } from "react";
import { DBResponseType, IUser } from "@/types";
import { getFavoriteCards, getReadCards } from "@/lib";
import { ProfileContext } from "./hooks";
import { ProfileProviderProps } from "./Profile.type";
import { Loader } from "@/components";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [favorites, setFavorites] = useState<null | DBResponseType>(null);
  const [favId, setFavId] = useState<string[]>([]);

  const [read, setRead] = useState<null | DBResponseType>(null);
  const [readId, setReadId] = useState<string[]>([]);
  console.log(read);
  useEffect(() => {
    if (user?.uid) {
      setIsLoading(true);
      Promise.all([getFavoriteCards(user.uid), getReadCards(user.uid)])
        .then((res) => {
          const [fav, read] = res;
          setFavorites(fav);
          setFavId(Object.keys(fav || []));
          setRead(read);
          setReadId(Object.keys(read || []));
        })
        .finally(() => setIsLoading(false));
    }
  }, [user?.uid, readId.length, favId.length]);

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
      <Loader loading={isLoading} />
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
