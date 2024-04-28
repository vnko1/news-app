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

  const data = await getFilteredNews(params.category, currentPage);

  if (!data || !data.results) notFound();
  const articles = JSONParser(data.results);

  return (
    <div>
      {params.category} {currentPage}
      <Articles articles={articles} />
    </div>
  );
};

export default CategoryPage;
