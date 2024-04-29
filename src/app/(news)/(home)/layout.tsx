import { ReactNode, Suspense } from "react";

import { getCategories } from "@/lib";

import { Filters } from "./ui";

import styles from "./home.module.scss";
import { JSONParser } from "@/utils";

export const revalidate = 3600;

async function HomeLayout({ children }: { children: ReactNode }) {
  const res = await getCategories();

  const data = JSONParser(res);

  return (
    <>
      <section className={styles["section-filters"]}>
        <div className={`${styles["container-filters"]} layout`}>
          <Suspense>
            <Filters categories={data.results} />
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
