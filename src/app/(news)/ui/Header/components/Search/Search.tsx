"use client";
import React, { ChangeEvent, FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { ConstantsEnum, IconsEnum } from "@/types";
import { Icon } from "@/components";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      const params = new URLSearchParams(searchParams);
      params.set(ConstantsEnum.Page, "1");
      term
        ? params.set(ConstantsEnum.Query, term)
        : params.delete(ConstantsEnum.Query);
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["search"]}>
        <input
          type="text"
          name="theme"
          autoComplete="off"
          placeholder="Search |"
          className={`${styles["field"]} search-t`}
          defaultValue={searchParams.get(ConstantsEnum.Query)?.toString()}
          onChange={handleSearch}
        />
        <Icon
          size={20}
          icon={IconsEnum.Search}
          className={`${styles["icon"]} icon-t`}
          removeInlineStyle
        />
      </div>
    </div>
  );
};

export default Search;
