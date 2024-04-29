import { ReactNode, Suspense } from "react";

import { JSONParser } from "@/utils";
import { getCategories } from "@/lib";

import { Filters, DateFilter } from "./ui";

import styles from "./home.module.scss";

export const revalidate = 3600;

async function HomeLayout({ children }: { children: ReactNode }) {
  const res = await getCategories();

  const data = JSONParser(res);

  return (
    <>
      <section className={styles["section-filters"]}>
        <div
          className={`${styles["container-filters"]} layout`}
          suppressHydrationWarning
        >
          <Suspense>
            <Filters categories={data.results} />
          </Suspense>
          <Suspense>
            <DateFilter />
          </Suspense>
        </div>
      </section>
      <section className={styles["section-articles"]}>
        <div className={`layout ${styles["container-articles"]}`}>
          {children}
        </div>
      </section>
    </>
  );
}

export default HomeLayout;

// import dynamic from "next/dynamic";
// const NoSSR = dynamic(() => import("./ui/DateFilter/DateFilter"), {
//   ssr: false,
// });
