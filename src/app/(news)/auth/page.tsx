import React from "react";
import Link from "next/link";
import Image from "next/image";

import { LinksEnum } from "@/types";

function AuthPage() {
  return (
    <section className="boundary">
      <div className="boundary__container">
        <h1>Log in to your account to view your selected news!</h1>
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
  );
}

export default AuthPage;
