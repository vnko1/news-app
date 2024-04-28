import { Articles } from "@/app/(news)/ui";
import { JSONParser } from "@/utils";
import { getPopularNews, getQueryNews } from "@/lib";
import { NotFoundComponent } from "@/components";
import { PopularArticleType, SearchArticleType } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string };
}) {
  let data: PopularArticleType[] | SearchArticleType[] = [];
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";

  if (query) {
    const res = await getQueryNews(query, currentPage);
    data = res.response?.docs;
  } else {
    const res = await getPopularNews();
    data = res?.results;
  }

  const articles = JSONParser(data);
  if (!articles || !articles.length) return <NotFoundComponent />;

  return (
    <section>
      <div className="layout">
        <Articles articles={articles} />
      </div>
    </section>
  );
}
