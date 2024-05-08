import React from "react";
import { getReadsCards } from "@/lib";
import { JSONParser } from "@/utils";

import { Reads } from "./ui";
import styles from "./read.module.scss";

const ReadPage = async () => {
  const reads = await getReadsCards();
  return (
    <section className={styles["read"]}>
      <div className="layout">
        <Reads reads={JSONParser(reads)} />
      </div>
    </section>
  );
};

export default ReadPage;
