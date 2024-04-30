"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

import { CurrentWeatherApiResponseType, IconsEnum } from "@/types";
import { getCurrentWeather } from "@/lib";
import { Icon, Loader } from "@/components";

import { WeatherProps } from "./Weather.type";
import styles from "./Weather.module.scss";
import { daysOfWeather } from "./utils";

const Weather: FC<WeatherProps> = () => {
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

  const { dayOfWeek, dateString } = daysOfWeather(
    currentWeather?.dt || Date.now()
  );

  return (
    <div className={styles["weather"]}>
      {currentWeather ? (
        <>
          <div className={styles["weather__state"]}>
            <p className={styles["deg"]}>
              {Math.round(currentWeather.main.temp)}
            </p>
            <div className={styles["state"]}>
              <p className={styles["cond"]}>{currentWeather.weather[0].main}</p>
              <p className={styles["loc"]}>
                <Icon icon={IconsEnum.Location} size={18} removeInlineStyle />
                {currentWeather.name}
              </p>
            </div>
          </div>

          <Image
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            width={128}
            height={120}
            alt="weather conditions"
            className={styles["image"]}
            priority
          />
          <p className={styles["date"]}>
            {dayOfWeek}
            <br />
            {dateString}
          </p>
        </>
      ) : (
        <Loader loading size={20} color="#fff" />
      )}
    </div>
  );
};

export default Weather;
