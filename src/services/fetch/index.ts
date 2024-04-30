const BASE_URL = process.env.API_URL as string;
const APi_KEY = process.env.API_KEY as string;

const W_BASE_URL = process.env.W_API_URL as string;
const W_API_KEY = process.env.W_API_KEY as string;

export async function fetchArticlesData(
  url: string,
  params?: URLSearchParams,
  reqParams?: RequestInit
) {
  const searchParams = new URLSearchParams(params);
  searchParams.append("api-key", APi_KEY);

  return await fetch(`${BASE_URL}${url}?${searchParams}`, {
    cache: "no-store",
    ...reqParams,
  });
}

export async function fetchWeatherData(
  url: string,
  params?: URLSearchParams,
  reqParams?: RequestInit
) {
  const searchParams = new URLSearchParams(params);
  searchParams.append("appid", W_API_KEY);
  return await fetch(`${W_BASE_URL}${url}?${searchParams}`, {
    cache: "no-store",
    ...reqParams,
  });
}
