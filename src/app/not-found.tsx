import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LinksEnum } from "@/types";

const NotFoundPage = () => {
  return (
    <main>
      <section className="boundary">
        <div className="boundary__container">
          <h1>Oh no! Page not found</h1>
          <p>Sorry, we couldn`t find the page you are looking for.</p>
          <Link href={LinksEnum.Home}>Go to home page</Link>
          <Image
            width={600}
            height={478}
            priority
            alt="not found"
            src="/not-found-desc@2x.webp"
            className="boundary__image"
          />
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
