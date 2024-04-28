import { Articles } from "@/app/(news)/ui";
import { JSONParser } from "@/utils";
import { getQueryNews } from "@/lib";
import { NotFoundComponent } from "@/components";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";

  currentPage;
  query;

  const res = await getQueryNews(query, currentPage);

  const articles = JSONParser(res.response?.docs);
  if (!articles.length) return <NotFoundComponent />;

  return (
    <section>
      News
      <Articles articles={articles} />
    </section>
  );
}
