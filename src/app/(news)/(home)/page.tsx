import { PopularArticleType, SearchArticleType } from "@/types";
import { JSONParser } from "@/utils";
import { getPopularNews, getNews } from "@/lib";

import { Articles } from "@/app/(news)/ui";

import { Pagination } from "./ui";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string; date?: string };
}) {
  let popularArticles: PopularArticleType[] | null = null;
  let articlesByQuery: SearchArticleType[] | null = null;
  let total = 0;
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const date = searchParams?.date || null;

  if (query) {
    const res = await getNews(query, date, currentPage);
    const data = JSONParser(res);
    articlesByQuery = data.response?.docs;
    total = data.response?.meta.hits;
  } else {
    const res = await getPopularNews();
    const data = JSONParser(res);
    popularArticles = data?.results;
  }

  return (
    <>
      <Articles
        popularArticles={popularArticles}
        articlesByQuery={articlesByQuery}
      />
      <Pagination total={total} page={currentPage} />
    </>
  );
}
