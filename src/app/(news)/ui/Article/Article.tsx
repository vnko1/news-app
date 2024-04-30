import React, { FC } from "react";
import { ArticleProps } from "./Article.type";
import styles from "./Article.module.scss";

const Article: FC<ArticleProps> = () => {
  return <div className={styles["article"]}>Article</div>;
};

export default Article;
