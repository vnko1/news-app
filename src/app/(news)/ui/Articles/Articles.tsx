"use client";
import React, { FC } from "react";

import Article from "../Article/Article";

import { ArticlesProps } from "./Articles.type";

const getClassNames = (index: number) => {
  if (!index) return "tab:-order-2";
  if (index === 1) return "desc:-order-3";
  return "";
};

const Articles: FC<ArticlesProps> = ({ articles }) => {
  return articles.map((_, index) => (
    <Article key={index} classNames={getClassNames(index)} />
  ));
};

export default Articles;
