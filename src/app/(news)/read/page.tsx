import React from "react";
import styles from "./read.module.scss";
import { Reads } from "./ui";

const ReadPage = () => {
  return (
    <section className={styles["read"]}>
      <div className="layout">
        <Reads />
      </div>
    </section>
  );
};

export default ReadPage;
