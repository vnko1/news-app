import React from "react";

import styles from "./weather.module.scss";
import { Loader } from "@/components";

function Loading() {
  return (
    <div className={styles["loader"]}>
      <Loader loading size={20} />
    </div>
  );
}

export default Loading;
