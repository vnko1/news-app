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

  const res = await getQueryNews(query, currentPage);

  const data = JSONParser(res);
  if (!data.response?.docs.length) return <NotFoundComponent />;

  return (
    <section>
      News
      <Articles articles={data.response.docs} />
    </section>
  );
}
