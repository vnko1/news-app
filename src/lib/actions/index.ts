// "use server";
import { fetchData } from "@/services";
import { ApiResponseType, EndpointsEnum } from "@/types";

export async function getCategories() {
  const res = await fetchData(EndpointsEnum.Category);

  return await res.json();
}

export async function getFilteredNews(
  filter: string | null,
  page: number
): Promise<ApiResponseType | null> {
  if (!filter) return null;
  const params = new URLSearchParams({
    offset: (page - 1).toString(),
    limit: "20",
  });
  const res = await fetchData(EndpointsEnum.Filters + filter + ".json", params);
  return await res.json();
}
