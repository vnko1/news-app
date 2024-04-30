const BASE_URL = process.env.API_URL as string;
const APi_KEY = process.env.API_KEY as string;

export async function fetchArticlesData(
  url: string,
  params?: URLSearchParams,
  reqParams?: RequestInit
) {
  const searchParams = new URLSearchParams(params);
  searchParams.append("api-key", APi_KEY);

  return await fetch(`${BASE_URL}/${url}?${searchParams}`, {
    cache: "no-store",
    ...reqParams,
  });
}
