"use client";
import React, { FC } from "react";
import { ArticlesProps } from "./Articles.type";
import { usePathname } from "next/navigation";

const Articles: FC<ArticlesProps> = ({ articles }) => {
  const pathName = usePathname();
  // console.log("🚀 ~ articles:", articles);
  articles;
  return <p>{pathName}</p>;
};

export default Articles;
