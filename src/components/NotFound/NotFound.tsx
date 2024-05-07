import React, { FC } from "react";
import Image from "next/image";

import { NotFoundProps } from "./NotFound.type";
import styles from "./NotFound.module.scss";

const NotFound: FC<NotFoundProps> = ({
  message = "We haven’t found news from this category",
  classNames,
}) => {
  return (
    <div className={`${styles["container"]} ${classNames}`}>
      <h1>{message}</h1>
      <Image
        width={600}
        height={478}
        priority
        alt="not found"
        src="/not-found-desc@2x.webp"
        className={styles["image"]}
      />
    </div>
  );
};

export default NotFound;
