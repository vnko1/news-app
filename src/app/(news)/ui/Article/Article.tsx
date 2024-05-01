"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

import { ArticleProps } from "./Article.type";
import styles from "./Article.module.scss";

const Article: FC<ArticleProps> = ({ classNames }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavClickButton = () => {
    setIsFavorite(!isFavorite);
  };

  const favBtnClassNames = cn(styles["fav-btn"], {
    [styles["active"]]: isFavorite,
  });

  return (
    <div className={`${styles["article"]} ${classNames}`}>
      <div className={styles["article__image"]}>
        <Image
          src={""}
          alt="im"
          width={395}
          height={395}
          className={styles["image"]}
        />
        <div className={styles["label"]}>Job searching</div>
        <button className={favBtnClassNames} onClick={handleFavClickButton}>
          {isFavorite ? "Remove from favorite" : "Add to favorite"}
          <Icon size={16} icon={IconsEnum.FavHeart} removeInlineStyle />
        </button>
      </div>
      <h2 className={styles["article__title"]}>
        8 tips for passing an online interview that will help you get a job
      </h2>
      <p className={styles["article__text"]}>
        Before you start looking for a job, it is useful to familiarize yourself
        with the job prospects offered by these...
      </p>
      <div className={styles["article__wrapper"]}>
        <p className={styles["wrapper__date"]}>20/02/2021</p>
        <a
          className={styles["wrapper__link"]}
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Article;
