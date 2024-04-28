import { getFilteredNews } from "@/lib";

import { ArticleType } from "@/types";
import { JSONParser } from "@/utils";
import { Articles } from "./ui";
import { NotFoundComponent } from "@/components";

export default async function Home({
  searchParams,
}: {
  searchParams?: { filter?: string; page?: string; query?: string };
}) {
  let articles: ArticleType[] | null = null;
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || null;
  const filter = searchParams?.filter || null;
  const filteredArticlesRes = await getFilteredNews(filter, currentPage);
  const filteredArticles = JSONParser(filteredArticlesRes);

  articles = filteredArticles && filteredArticles.results;
  query;

  if (!articles) return <NotFoundComponent />;

  return (
    <section>
      <Articles articles={articles} />
    </section>
  );
}
