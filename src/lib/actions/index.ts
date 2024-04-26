"use server";
import { fetchData } from "@/services";
import { EndpointsEnum } from "@/types";

export async function getCategories() {
  const res = await fetchData(EndpointsEnum.Category);

  return await res.json();
}
