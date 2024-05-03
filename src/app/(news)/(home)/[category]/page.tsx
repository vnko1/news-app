import React from "react";
import { getFilteredNews } from "@/lib";
import { JSONParser } from "@/utils";
import { Articles } from "../../ui";
import { notFound } from "next/navigation";

const CategoryPage = async ({
  params,
  searchParams,
}: {
  searchParams: { page?: string };
  params: { category: string };
}) => {
  let total: number = 0;
  const currentPage = Number(searchParams?.page) || 1;

  const res = await getFilteredNews(params.category, currentPage);
  const data = JSONParser(res);
  total = data.num_results;
  // if (!data || !data.results) notFound();
  total;
  return <Articles articlesByCategory={data.results} />;
};

export default CategoryPage;
