import React, { FC } from "react";
import Image from "next/image";

import { NotFoundProps } from "./NotFound.type";
import styles from "./NotFound.module.scss";

const NotFound: FC<NotFoundProps> = ({
  message = "We haven’t found news from this category",
}) => {
  return (
    <div className={styles["container"]}>
      <h1>{message}</h1>
      <Image
        width={600}
        height={478}
        alt="not found"
        src="/not-found-desc@2x.webp"
      />
    </div>
  );
};

export default NotFound;
