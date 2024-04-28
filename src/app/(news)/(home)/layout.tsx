import { ReactNode, Suspense } from "react";

import { CategoryResponse } from "@/types";
import { getCategories } from "@/lib";

import { Filters } from "./ui";

import styles from "./home.module.scss";
import { JSONParser } from "@/utils";

async function HomeLayout({ children }: { children: ReactNode }) {
  const res: CategoryResponse = await getCategories();

  const data = JSONParser(res);

  return (
    <>
      <section className={styles["section"]}>
        <div className={`${styles["container"]} layout`}>
          <Suspense>
            <Filters categories={data.results} />
          </Suspense>
        </div>
      </section>
      {children}
    </>
  );
}

export default HomeLayout;
