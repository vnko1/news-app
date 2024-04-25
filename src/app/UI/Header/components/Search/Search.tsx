import React, { FC } from "react";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

import { SearchProps } from "./Search.type";
import styles from "./Search.module.scss";

const Search: FC<SearchProps> = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["search"]}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search |"
          className={styles["field"]}
        />
        <Icon size={20} icon={IconsEnum.Search} className={styles["icon"]} />
      </div>
    </div>
  );
};

export default Search;
