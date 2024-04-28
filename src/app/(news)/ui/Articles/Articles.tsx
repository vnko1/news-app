"use client";
import React, { FC } from "react";
import { ArticlesProps } from "./Articles.type";

const Articles: FC<ArticlesProps> = ({ articles }) => {
  console.log("🚀 ~ articles:", articles);

  return <div>Articles</div>;
};

export default Articles;
