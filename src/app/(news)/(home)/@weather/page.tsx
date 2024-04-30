"use client";
import React, { useEffect, useState } from "react";

import { getCurrentWeather } from "@/lib";
import { CurrentWeatherApiResponseType } from "@/types";
import { Loader } from "@/components";

import { Weather } from "./ui";
import styles from "./weather.module.scss";

function WeatherPage() {
  const [currentWeather, setCurrentWeather] =
    useState<null | CurrentWeatherApiResponseType>(null);

  useEffect(() => {
    async function getPosition(position: GeolocationPosition) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const res = await getCurrentWeather(lat, lon);
      setCurrentWeather(res);
    }
    async function onErrorPosition() {
      const res = await getCurrentWeather();

      setCurrentWeather(res);
    }

    navigator.geolocation.getCurrentPosition(getPosition, onErrorPosition);
  }, []);

  return (
    <div className={styles["weather"]}>
      {currentWeather ? (
        <Weather data={currentWeather} />
      ) : (
        <Loader loading size={20} />
      )}
    </div>
  );
}

export default WeatherPage;
