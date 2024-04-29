// "use server";

import { fetchData } from "@/services";
import {
  CategoryApiResponseType,
  EndpointsEnum,
  ErrorApiResponse,
  FiltersApiResponse,
  PopularApiResponseType,
  SearchApiResponseType,
} from "@/types";

export async function getCategories(): Promise<FiltersApiResponse> {
  const res = await fetchData(EndpointsEnum.Category);
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
  const res = await fetchData(EndpointsEnum.Filters + filter + ".json", params);
  const data: Promise<CategoryApiResponseType | ErrorApiResponse> =
    await res.json();

  if ("fault" in data)
    throw new Error((data as ErrorApiResponse).fault.detail.errorcode);

  return data as Promise<CategoryApiResponseType>;
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
  const data: Promise<SearchApiResponseType | ErrorApiResponse> =
    await res.json();

  if ("fault" in data)
    throw new Error((data as ErrorApiResponse).fault.detail.errorcode);

  return data as Promise<SearchApiResponseType>;
}

export async function getPopularNews(): Promise<PopularApiResponseType> {
  const res = await fetchData(EndpointsEnum.Popular);
  const data: Promise<PopularApiResponseType | ErrorApiResponse> =
    await res.json();

  if ("fault" in data)
    throw new Error((data as ErrorApiResponse).fault.detail.errorcode);

  return data as Promise<PopularApiResponseType>;
}
