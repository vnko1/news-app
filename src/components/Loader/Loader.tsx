import React, { FC } from "react";
import { RotateLoader } from "react-spinners";

import { LoaderProps } from "./Loader.type";
import styles from "./Loader.module.scss";

const Loader: FC<LoaderProps> = ({ loading = false }) => {
  return (
    <div className={styles["loader"]}>
      <RotateLoader
        color="#4440F6"
        aria-label="Loading Spinner"
        loading={loading}
      />
    </div>
  );
};

export default Loader;
