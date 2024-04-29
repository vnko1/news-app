import {
  CategoryArticleType,
  PopularArticleType,
  SearchArticleType,
  Category,
} from "@/types";

type ApiResponseType = { status: string; copyright: string };

export type ErrorApiResponse = {
  fault: { faultstring: string; detail: { errorcode: string } };
};

export type FiltersApiResponse = {
  num_results: number;
  results: Category[];
} & ApiResponseType;

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
