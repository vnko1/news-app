import {
  CategoryArticleType,
  PopularArticleType,
  SearchArticleType,
} from "@/types";

export type ArticlesProps = {
  articlesByQuery?: Array<SearchArticleType> | null;
  articlesByCategory?: Array<CategoryArticleType> | null;
  popularArticles?: Array<PopularArticleType> | null;
};
