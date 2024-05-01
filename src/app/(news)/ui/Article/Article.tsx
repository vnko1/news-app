import React, { FC } from "react";
import { ArticleProps } from "./Article.type";
import styles from "./Article.module.scss";

const Article: FC<ArticleProps> = ({ classNames }) => {
  return <div className={`${styles["article"]} ${classNames}`}>Article</div>;
};

export default Article;
