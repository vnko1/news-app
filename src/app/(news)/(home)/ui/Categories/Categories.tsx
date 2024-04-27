"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useGetScreenSize, useModal } from "@/hooks";
import { Button, RadioButton } from "@/components";

import { Popup } from "./components";

import { CategoriesProps } from "./Categories.type";
import styles from "./Categories.module.scss";
import { ConstantsEnum } from "@/types";

const Categories: FC<CategoriesProps> = ({ categories }) => {
  const props = useModal();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const screenSize = useGetScreenSize();
  const isMobScreen = screenSize < 768;

  const endSliceValue = screenSize >= 1280 ? 6 : 4;

  const [selectedValue, setSelectedValue] = useState<null | string>(null);

  useEffect(() => {
    if (searchParams.has(ConstantsEnum.Category))
      setSelectedValue(searchParams.get(ConstantsEnum.Category));
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectedValue) {
      params.set(ConstantsEnum.Page, "1");
      params.set(ConstantsEnum.Category, selectedValue);
    } else {
      params.delete(ConstantsEnum.Category);
    }

    replace(pathname + "?" + params.toString());
  }, [pathname, replace, searchParams, selectedValue]);

  const togglePopup = () => {
    if (!props.active) return props.setActive(true);
    props.close();
  };
  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const renderCategories = isMobScreen ? (
    <div className={styles["wrapper"]}>
      <Button onClick={togglePopup} icon isActive={props.visible}>
        Categories
      </Button>
      <Popup
        {...props}
        categories={categories}
        selectedValue={selectedValue}
        onChange={onHandleChange}
      />
    </div>
  ) : (
    <>
      {categories.slice(0, endSliceValue).map((category) => (
        <RadioButton
          onChange={onHandleChange}
          key={category.section}
          variant="outlined"
          name="category"
          label={category.display_name}
          value={category.section}
          checked={selectedValue === category.section}
        />
      ))}
      <div className={styles["wrapper"]}>
        <Button onClick={togglePopup} icon isActive={props.visible}>
          Others
        </Button>
        <Popup
          {...props}
          categories={categories.slice(endSliceValue)}
          selectedValue={selectedValue}
          onChange={onHandleChange}
        />
      </div>
    </>
  );
  return <div className={styles["categories"]}>{renderCategories}</div>;
};

export default Categories;
