"use client";
import React, { FC } from "react";
import { Button, RadioButton } from "@/components";
import { CategoriesProps } from "./Categories.type";
import styles from "./Categories.module.scss";

const Categories: FC<CategoriesProps> = ({ categories }) => {
  categories;

  return (
    <div className={styles["categories"]}>
      <Button icon>Categories</Button>
      <RadioButton />
    </div>
  );
};

export default Categories;
