import { IArticle } from "@/types";

export type ArticleProps = {
  classNames?: string;
} & Omit<IArticle, "read_date">;
