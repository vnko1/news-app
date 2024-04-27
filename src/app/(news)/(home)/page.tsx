import { getFilteredNews } from "@/lib";
import { JSONParser } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams?: { filter?: string; page?: string; query?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || null;
  const filter = searchParams?.filter || null;

  const res = await getFilteredNews(filter, currentPage);
  const data = JSONParser(res);

  query;
  data;
  return <section>PAGE</section>;
}
