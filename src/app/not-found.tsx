import React from "react";
import Link from "next/link";

import styles from "./app.module.scss";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <main>
      <section className={styles["section"]}>
        <div className={styles["container"]}>
          <h1>Oh no! Page not found</h1>
          <p>Sorry, we couldn`t find the page you are looking for.</p>
          <Link href="/">Go to home page</Link>
          <Image
            width={600}
            height={478}
            alt="not found"
            src="/not-found-desc@2x.webp"
          />
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
