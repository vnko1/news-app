"use client";
import React, { FC } from "react";
import { Button, RadioButton } from "@/components";
import { CategoriesProps } from "./Categories.type";
import styles from "./Categories.module.scss";
import { Popup } from "./components";
import { useModal } from "@/hooks";

const Categories: FC<CategoriesProps> = ({ categories }) => {
  categories;
  const props = useModal();
  const togglePopup = () => {
    props.setActive(!props.active);
  };
  return (
    <div className={styles["categories"]}>
      <RadioButton />
      <div className={styles["wrapper"]}>
        <Button onClick={togglePopup} icon isActive={props.visible}>
          Categories
        </Button>
        <Popup {...props} />
      </div>
    </div>
  );
};

export default Categories;
