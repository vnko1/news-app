// "use server";

import { fetchArticlesData } from "@/services";
import {
  CategoryApiResponseType,
  NewsEndpointsEnum,
  ErrorApiResponse,
  FiltersApiResponse,
  PopularApiResponseType,
  SearchApiResponseType,
} from "@/types";

export async function getCategories(): Promise<FiltersApiResponse> {
  const res = await fetchArticlesData(NewsEndpointsEnum.Category);
  const data: Promise<FiltersApiResponse | ErrorApiResponse> = await res.json();
  if ("fault" in data)
    throw new Error((data as ErrorApiResponse).fault.detail.errorcode);

  return data as Promise<FiltersApiResponse>;
}

export async function getFilteredNews(
  filter: string,
  page: number
): Promise<CategoryApiResponseType> {
  const params = new URLSearchParams({
    offset: (page - 1).toString(),
    limit: "20",
  });
  const res = await fetchArticlesData(
    NewsEndpointsEnum.Filters + filter + ".json",
    params
  );
  const data: Promise<CategoryApiResponseType | ErrorApiResponse> =
    await res.json();

  if ("fault" in data)
    throw new Error((data as ErrorApiResponse).fault.detail.errorcode);

  return data as Promise<CategoryApiResponseType>;
}

export async function getNews(
  query: string,
  date: string | null,
  page: number
): Promise<SearchApiResponseType> {
  const params = new URLSearchParams({
    page: (page - 1).toString(),
    q: query,
  });

  if (date) {
    params.append("begin_date", date);
    params.append("end_date", date);
  }

  const res = await fetchArticlesData(NewsEndpointsEnum.Search, params);
  const data: Promise<SearchApiResponseType | ErrorApiResponse> =
    await res.json();

  if ("fault" in data)
    throw new Error((data as ErrorApiResponse).fault.detail.errorcode);

  return data as Promise<SearchApiResponseType>;
}

export async function getPopularNews(): Promise<PopularApiResponseType> {
  const res = await fetchArticlesData(NewsEndpointsEnum.Popular);
  const data: Promise<PopularApiResponseType | ErrorApiResponse> =
    await res.json();

  if ("fault" in data)
    throw new Error((data as ErrorApiResponse).fault.detail.errorcode);

  return data as Promise<PopularApiResponseType>;
}
