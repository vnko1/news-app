"use client";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import cn from "classnames";

import { addFavoriteCard, deleteFavoriteCard, addReadCard } from "@/lib";
import { formatDate } from "@/utils";
import { useProfileContext } from "@/context";
import { IconsEnum, LinksEnum } from "@/types";
import { Icon } from "@/components";

import { ArticleProps } from "./Article.type";
import styles from "./Article.module.scss";

const Article: FC<ArticleProps> = ({
  id,
  classNames,
  image,
  imageTag,
  section,
  title,
  abstract,
  pub_date,
  url,
}) => {
  const router = useRouter();
  const { user, favId, readId, setFavId, setReadId } = useProfileContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    setIsFavorite(favId.includes(id + ""));
  }, [favId, id]);

  useEffect(() => {
    setIsRead(readId.includes(id + ""));
  }, [readId, id]);

  const handleFavClickButton = async () => {
    if (user) {
      if (!isFavorite) {
        setFavId((readId) => [...readId, id + ""]);
        setIsFavorite(true);
        const article = {
          id,
          image,
          imageTag,
          section,
          title,
          abstract,
          pub_date,
          url,
        };

        await addFavoriteCard(user.uid, article);
      } else {
        setFavId((readId) => readId.filter((read) => read !== id + ""));
        setIsFavorite(false);
        await deleteFavoriteCard(user.uid, id + "");
      }
    } else {
      router.replace(LinksEnum.Auth);
    }
  };

  const handleReadArticle = async () => {
    const article = {
      id,
      image,
      imageTag,
      section,
      title,
      abstract,
      pub_date,
      url,
    };
    if (user?.uid) {
      addReadCard(user.uid, article);
      setReadId((read) => [...read, id + ""]);
    }
  };
  const articleClassNames = cn(
    styles["article"],
    { [styles["active"]]: isRead },
    classNames
  );

  const favBtnClassNames = cn(styles["fav-btn"], {
    [styles["active"]]: isFavorite,
  });

  return (
    <div className={articleClassNames}>
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
        {isRead && (
          <div className={styles["check"]}>
            Already read{" "}
            <Icon size={18} icon={IconsEnum.Check} removeInlineStyle />
          </div>
        )}
        <button className={favBtnClassNames} onClick={handleFavClickButton}>
          {isFavorite ? "Remove from favorite" : "Add to favorite"}
          <Icon size={16} icon={IconsEnum.FavHeart} removeInlineStyle />
        </button>
      </div>
      <h2 className={styles["article__title"]}>{title}</h2>
      <p className={styles["article__text"]}>{abstract}</p>
      <div className={styles["article__wrapper"]}>
        <p className={styles["wrapper__date"]}>{formatDate(pub_date)}</p>
        <a
          className={styles["wrapper__link"]}
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          onClick={handleReadArticle}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Article;
