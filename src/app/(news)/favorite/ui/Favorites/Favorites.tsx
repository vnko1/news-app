"use client";
import { Article } from "@/app/(news)/ui";
import { useProfileContext } from "@/context";
import React, { FC } from "react";

const Favorites: FC = () => {
  const { favorites } = useProfileContext();
  const favArr = Object.keys(favorites || []);

  if (favorites)
    return favArr.map((fav) => {
      return <Article key={favorites[fav].id} {...favorites[fav]} />;
    });

  return null;
};

export default Favorites;
