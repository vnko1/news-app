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
  const currentPage = Number(searchParams?.page) || 1;

  const res = await getFilteredNews(params.category, currentPage);
  const data = JSONParser(res);

  if (!data || !data.results) notFound();

  return <Articles articles={data.results} />;
};

export default CategoryPage;
