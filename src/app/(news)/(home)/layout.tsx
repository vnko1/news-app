import { ReactNode, Suspense } from "react";

import { JSONParser } from "@/utils";
import { getCategories } from "@/lib";

import { DatePicker, Filters } from "./ui";

import styles from "./home.module.scss";

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
          <DatePicker />
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
