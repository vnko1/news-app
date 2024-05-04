"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

import { ArticleProps } from "./Article.type";
import styles from "./Article.module.scss";

const Article: FC<ArticleProps> = ({
  classNames,
  image,
  imageTag,
  section,
  title,
  abstract,
  pub_date,
  url,
}) => {
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
          src={image}
          alt={imageTag}
          width={395}
          height={395}
          priority
          className={styles["image"]}
        />
        <div className={styles["label"]}>{section}</div>
        <button className={favBtnClassNames} onClick={handleFavClickButton}>
          {isFavorite ? "Remove from favorite" : "Add to favorite"}
          <Icon size={16} icon={IconsEnum.FavHeart} removeInlineStyle />
        </button>
      </div>
      <h2 className={styles["article__title"]}>{title}</h2>
      <p className={styles["article__text"]}>{abstract}</p>
      <div className={styles["article__wrapper"]}>
        <p className={styles["wrapper__date"]}>{pub_date}</p>
        <a
          className={styles["wrapper__link"]}
          href={url}
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
