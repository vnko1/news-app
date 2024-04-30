"use server";
import { fetchWeatherData } from "@/services";
import {
  CurrentWeatherApiResponseType,
  WeeklyWeatherApiResponseType,
} from "@/types";
import { WeatherEndpointsEnum } from "@/types/enums/endpointsEnum";

export async function getCurrentWeather(
  lat = 50.433,
  lon = 30.516
): Promise<CurrentWeatherApiResponseType> {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
  });

  const res = await fetchWeatherData(WeatherEndpointsEnum.Current, params);
  return await res.json();
}

export async function getWeeklyWeather(
  lat = 50.433,
  lon = 30.516
): Promise<WeeklyWeatherApiResponseType> {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
  });
  const res = await fetchWeatherData(WeatherEndpointsEnum.Weekly, params);
  return await res.json();
}
