import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LinksEnum } from "@/types";
import styles from "./app.module.scss";

const NotFoundPage = () => {
  return (
    <main>
      <section className={styles["section"]}>
        <div className={styles["container"]}>
          <h1>Oh no! Page not found</h1>
          <p>Sorry, we couldn`t find the page you are looking for.</p>
          <Link href={LinksEnum.Home}>Go to home page</Link>
          <Image
            width={600}
            height={478}
            priority
            alt="not found"
            src="/not-found-desc@2x.webp"
            className={styles["image"]}
          />
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
