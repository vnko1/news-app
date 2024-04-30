import React, { FC } from "react";
import { MoonLoader } from "react-spinners";

import { LoaderProps } from "./Loader.type";
import styles from "./Loader.module.scss";

const Loader: FC<LoaderProps> = ({ loading = false, classNames, ...props }) => {
  return (
    <div className={`${styles["loader"]} ${classNames}`}>
      <MoonLoader
        {...props}
        color="#4440F6"
        aria-label="Loading Spinner"
        loading={loading}
      />
    </div>
  );
};

export default Loader;
