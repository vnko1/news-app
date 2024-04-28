"use client";
import React, { FC } from "react";

import { useGetScreenSize, useModal } from "@/hooks";
import { Button, LinkButton } from "@/components";

import { LinkPopup } from "..";

import { LinkFiltersProps } from "./LinkFilters.type";
import styles from "./LinkFilters.module.scss";

const LinkFilters: FC<LinkFiltersProps> = ({ categories = [] }) => {
  const props = useModal();

  const { width } = useGetScreenSize();

  const isMobScreen = width && width < 768;

  const endSliceValue = width && width >= 1280 ? 6 : 4;

  const togglePopup = () => {
    if (!props.active) return props.setActive(true);
    props.close();
  };

  const renderCategories = isMobScreen ? (
    <div className={styles["wrapper"]}>
      <Button onClick={togglePopup} icon isActive={props.visible}>
        Categories
      </Button>
      <LinkPopup {...props} categories={categories} />
    </div>
  ) : (
    <>
      {categories.slice(0, endSliceValue).map((category) => (
        <LinkButton
          key={category.section}
          name={category.display_name}
          href={category.section}
          variant="outlined"
        />
      ))}
      <div className={styles["wrapper"]}>
        <Button onClick={togglePopup} icon isActive={props.visible}>
          Others
        </Button>
        <LinkPopup {...props} categories={categories.slice(endSliceValue)} />
      </div>
    </>
  );
  return <div className={styles["categories"]}>{renderCategories}</div>;
};

export default LinkFilters;
