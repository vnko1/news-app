"use client";
import { useProfileContext } from "@/context";
import React, { FC } from "react";

const Favorites: FC = () => {
  const { favorites } = useProfileContext();
  console.log(favorites);
  return <div>Favorites</div>;
};

export default Favorites;
