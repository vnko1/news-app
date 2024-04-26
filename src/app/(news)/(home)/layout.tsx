import { ReactNode } from "react";

import { CategoryResponse } from "@/types";
import { getCategories } from "@/lib";
import { Filters } from "./ui";

import styles from "./home.module.scss";

async function HomeLayout({ children }: { children: ReactNode }) {
  const data: CategoryResponse = await getCategories();

  return (
    <>
      <section className={styles["section"]}>
        <div className={`${styles["container"]} layout`}>
          <div className={styles["filters"]}>
            <Filters category={data.results} />
          </div>
        </div>
      </section>
      {children}
    </>
  );
}

export default HomeLayout;
