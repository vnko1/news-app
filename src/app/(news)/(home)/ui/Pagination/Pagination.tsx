"use client";
import React, { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination as MUIPagination } from "@mui/material";

import { ConstantsEnum } from "@/types";
import { PaginationProps } from "./Pagination.type";
import styles from "./Pagination.module.scss";

const Pagination: FC<PaginationProps> = ({ total, page }) => {
  const count = Math.floor(total / 8);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(ConstantsEnum.Page, value.toString());
    replace(pathname + "?" + params.toString());
  };

  if (total === 0) return null;

  return (
    <div className={styles["wrapper"]}>
      <MUIPagination
        count={count}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        size="medium"
      />
    </div>
  );
};

export default Pagination;
