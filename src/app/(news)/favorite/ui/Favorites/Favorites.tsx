"use client";
import { Article } from "@/app/(news)/ui";
import { NotFoundComponent } from "@/components";
import { useProfileContext } from "@/context";
import React, { FC } from "react";

const Favorites: FC = () => {
  const { favorites } = useProfileContext();
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
