import {
  CategoryArticleType,
  PopularArticleType,
  SearchArticleType,
} from "../article/article.type";

type ApiResponseType = { status: string; copyright: string };

export type CategoryApiResponseType = {
  num_results: number;
  results: CategoryArticleType[] | null;
} & ApiResponseType;

export type SearchApiResponseType = {
  response: {
    meta: { hits: number; offset: number; time: number };
    docs: SearchArticleType[];
  };
} & ApiResponseType;

export type PopularApiResponseType = {
  num_results: number;
  results: PopularArticleType[];
} & ApiResponseType;