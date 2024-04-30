"use client";
import React, { FC } from "react";

import Article from "../Article/Article";

import { ArticlesProps } from "./Articles.type";
import styles from "./Articles.module.scss";

const Articles: FC<ArticlesProps> = ({ articles }) => {
  return articles.map((_, index) => (
    <div key={index} className={styles["article"]}>
      <Article />
    </div>
  ));
};

export default Articles;
