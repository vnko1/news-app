"use server";
import { fetchData } from "@/services";
import { EndpointsEnum } from "@/types";

export async function getCategories() {
  const res = await fetchData(EndpointsEnum.Category);

  return await res.json();
}

export async function getFilteredNews(filter: string | null, page: number) {
  if (!filter) return null;
  const params = new URLSearchParams({ offset: page.toString(), limit: "20" });

  const res = await fetchData(EndpointsEnum.Filters + filter + ".json", params);
  return await res.json();
}
