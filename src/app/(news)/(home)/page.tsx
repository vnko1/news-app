export default function Home({
  searchParams,
}: {
  searchParams?: { filter?: string; page?: string; q?: string };
}) {
  console.log(searchParams);
  return <section>PAGE</section>;
}
