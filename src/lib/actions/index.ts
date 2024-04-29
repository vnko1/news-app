// "use server";

import { fetchData } from "@/services";
import {
  CategoryApiResponseType,
  EndpointsEnum,
  FiltersApiResponse,
  PopularApiResponseType,
  SearchApiResponseType,
} from "@/types";

export async function getCategories(): Promise<FiltersApiResponse> {
  const res = await fetchData(EndpointsEnum.Category);

  return await res.json();
}

export async function getFilteredNews(
  filter: string,
  page: number
): Promise<CategoryApiResponseType> {
  const params = new URLSearchParams({
    offset: (page - 1).toString(),
    limit: "20",
  });
  const res = await fetchData(EndpointsEnum.Filters + filter + ".json", params);
  return await res.json();
}

export async function getQueryNews(
  query: string,
  page: number
): Promise<SearchApiResponseType> {
  const params = new URLSearchParams({
    page: (page - 1).toString(),
    q: query,
  });

  const res = await fetchData(EndpointsEnum.Search, params);

  return await res.json();
}

export async function getPopularNews(): Promise<PopularApiResponseType> {
  const res = await fetchData(EndpointsEnum.Popular);

  return await res.json();
}
