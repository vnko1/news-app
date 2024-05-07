"use client";
import React, { FC } from "react";

import { NotFoundComponent } from "@/components";
import { Article } from "@/app/(news)/ui";
import { FavoritesProps } from "./Favorites.type";

const Favorites: FC<FavoritesProps> = ({ favorites }) => {
  const favArr = Object.keys(favorites || []);

  if (favorites)
    return favArr.map((fav) => {
      return <Article key={favorites[fav].id} {...favorites[fav]} />;
    });

  return (
    <NotFoundComponent
      classNames="cards-not-found"
      message="You haven't added anything to your favorites yet"
    />
  );
};

export default Favorites;
