import { PopularArticleType, SearchArticleType } from "@/types";
import { JSONParser } from "@/utils";
import { getPopularNews, getNews } from "@/lib";
import { NotFoundComponent } from "@/components";

import { Articles } from "@/app/(news)/ui";

import { Pagination } from "./ui";
import styles from "./home.module.scss";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string; date?: string };
}) {
  let articles: PopularArticleType[] | SearchArticleType[] = [];
  let total: number = 0;
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const date = searchParams?.date || null;

  if (query) {
    const res = await getNews(query, date, currentPage);
    const data = JSONParser(res);
    articles = data.response?.docs;
    total = data.response.meta.hits;
  } else {
    const res = await getPopularNews();
    const data = JSONParser(res);
    articles = data?.results;
  }

  if (!articles || !articles.length) return <NotFoundComponent />;

  return (
    <>
      <div className={styles["articles"]}>
        <Articles articles={articles} />
      </div>
      <Pagination total={total} page={currentPage} />
    </>
  );
}
