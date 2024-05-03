"use client";
import React, { FC } from "react";

import { NotFoundComponent } from "@/components";

import Article from "../Article/Article";
import { ArticlesProps } from "./Articles.type";

const getClassNames = (index: number) => {
  if (!index) return "tab:-order-2";
  if (index === 1) return "desc:-order-3";
  return "";
};

const Articles: FC<ArticlesProps> = ({
  popularArticles,
  articlesByQuery,
  articlesByCategory,
}) => {
  if (popularArticles?.length)
    return popularArticles.map((article, index) => (
      <Article
        key={article.id}
        classNames={getClassNames(index)}
        url={article.url}
        section={article.section}
        title={article.title}
        abstract={article.abstract}
        pub_date={article.published_date}
        image={
          article.media[article.media.length - 1]?.["media-metadata"][
            article.media[article.media.length - 1]?.["media-metadata"].length -
              1
          ]?.url || "/not-found-desc@2x.webp"
        }
        imageTag={article.media[0]?.caption || "image"}
      />
    ));

  if (articlesByQuery?.length)
    return articlesByQuery.map((article, index) => (
      <Article
        key={article._id}
        classNames={getClassNames(index)}
        url={article.web_url || "url"}
        section={article.section_name}
        title={article.headline.print_headline}
        abstract={article.abstract}
        image={
          article.multimedia[article.multimedia.length - 1]?.url
            ? "https://www.nytimes.com/" +
              article.multimedia[article.multimedia.length - 1].url
            : "/not-found-desc@2x.webp"
        }
        imageTag={article.byline.original || "image"}
        pub_date={article.pub_date}
      />
    ));

  if (articlesByCategory?.length)
    return articlesByCategory.map((article, index) => {
      return (
        <Article
          key={index}
          classNames={getClassNames(index)}
          title={article.title}
          pub_date={article.published_date}
          section={article.section}
          abstract={article.abstract}
          url={article.url}
          image={article.multimedia[article.multimedia.length - 1].url}
          imageTag={article.multimedia[article.multimedia.length - 1].caption}
        />
      );
    });
  return null;

  // return <NotFoundComponent />;
};

export default Articles;
