import {
  CategoryArticleType,
  PopularArticleType,
  SearchArticleType,
} from "@/types";

export type ArticlesProps = {
  articles: Array<SearchArticleType | CategoryArticleType | PopularArticleType>;
};
