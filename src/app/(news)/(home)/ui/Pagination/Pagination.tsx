"use client";
import React, { FC } from "react";
import { Pagination as MUIPagination } from "@mui/material";
import { PaginationProps } from "./Pagination.type";
import styles from "./Pagination.module.scss";

const Pagination: FC<PaginationProps> = ({ total }) => {
  console.log("🚀 ~ total:", total);
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    value;
    // setPage(value);
  };
  if (total !== 0) return null;
  return (
    <div className={styles["wrapper"]}>
      <MUIPagination
        count={11}
        page={1}
        onChange={handleChange}
        // boundaryCount={1}
        siblingCount={2}
        variant="outlined"
        shape="rounded"
        size="medium"
        // boundaryCount={2}
      />
    </div>
  );
};

export default Pagination;
