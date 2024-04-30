"use client";
import React, { FC, useEffect, useState } from "react";

import { CurrentWeatherApiResponseType } from "@/types";
import { getCurrentWeather } from "@/lib";

import { WeatherProps } from "./Weather.type";
import styles from "./Weather.module.scss";

const Weather: FC<WeatherProps> = () => {
  const [currentWeather, setCurrentWeather] =
    useState<null | CurrentWeatherApiResponseType>(null);

  currentWeather;

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

  return <div className={styles["weather"]}>Weather</div>;
};

export default Weather;
