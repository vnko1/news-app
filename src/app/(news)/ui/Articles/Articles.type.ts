import { CategoryArticleType, SearchArticleType } from "@/types";

export type ArticlesProps = {
  articles: Array<SearchArticleType | CategoryArticleType>;
};
