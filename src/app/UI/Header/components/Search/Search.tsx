"use client";
import React, { ChangeEvent, FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

import { SearchProps } from "./Search.type";
import styles from "./Search.module.scss";

const Search: FC<SearchProps> = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    const params = new URLSearchParams(searchParams);
    term ? params.set("query", term) : params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["search"]}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search |"
          className={styles["field"]}
          defaultValue={searchParams.get("query")?.toString()}
          onChange={handleSearch}
        />
        <Icon
          size={20}
          icon={IconsEnum.Search}
          className={styles["icon"]}
          removeInlineStyle
        />
      </div>
    </div>
  );
};

export default Search;
