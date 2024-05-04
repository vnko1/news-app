"use client";
import React from "react";
import Image from "next/image";

import styles from "./weather.module.scss";

function WeatherError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <section className="boundary">
        <div className={`"boundary__container" ${styles["error-wrapper"]}`}>
          <h1>Oh no! Something went wrong!</h1>
          <p>{error.message || error.digest}</p>
          <button onClick={() => reset()}>Reload page</button>
          <Image
            width={600}
            height={478}
            alt="not found"
            src="/not-found-desc@2x.webp"
            className="boundary__image"
          />
        </div>
      </section>
    </main>
  );
}

export default WeatherError;
