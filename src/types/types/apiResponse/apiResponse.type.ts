import { ArticleType } from "../article/article.type";

export type ApiResponseType = {
  status: string;
  copyright: string;
  num_results: number;
  results: ArticleType[] | null;
};
