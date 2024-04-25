import React, { FC } from "react";
import Link from "next/link";

import { LinksEnum } from "@/types";

import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link href={LinksEnum.Home} className={styles["logo"]}>
      News
    </Link>
  );
};

export default Logo;
