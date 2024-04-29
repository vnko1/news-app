import { PopularArticleType, SearchArticleType } from "@/types";
import { JSONParser } from "@/utils";
import { getPopularNews, getNews } from "@/lib";
import { NotFoundComponent } from "@/components";
import { Articles } from "@/app/(news)/ui";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string; date?: string };
}) {
  let data: PopularArticleType[] | SearchArticleType[] = [];
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const date = searchParams?.date || "";

  if (query) {
    const res = await getNews(query, date, currentPage);

    data = res.response?.docs;
    console.log("🚀 ~ data:", data);
  } else {
    const res = await getPopularNews();
    data = res?.results;
  }

  const articles = JSONParser(data || []);
  // if (!articles || !articles.length) return <NotFoundComponent />;

  return <Articles articles={articles} />;
}
