import React, { FC } from "react";

import { WeatherProps } from "./Weather.type";
import styles from "./Weather.module.scss";

const Weather: FC<WeatherProps> = () => {
  return <div className={styles["weather"]}>Weather</div>;
};

export default Weather;
