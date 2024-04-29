"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ConstantsEnum, LinksEnum } from "@/types";
import { useGetScreenSize, useModal } from "@/hooks";
import { Button, RadioButton } from "@/components";

import { Popup } from "..";

import { FiltersProps } from "./Filters.type";
import styles from "./Filters.module.scss";

const Filters: FC<FiltersProps> = ({ categories = [] }) => {
  const [selectedValue, setSelectedValue] = useState<null | string>(null);
  const props = useModal();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const { width } = useGetScreenSize();

  const isMobScreen = width && width < 768;

  const endSliceValue = width && width >= 1280 ? 6 : 4;

  useEffect(() => {
    const [, currentCategory] = pathname.split("/");

    if (currentCategory) return setSelectedValue(currentCategory);
    setSelectedValue(null);
  }, [pathname]);

  const togglePopup = () => {
    if (!props.active) return props.setActive(true);
    props.close();
  };
  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSelectedValue(term);
    const params = new URLSearchParams(searchParams);
    params.set(ConstantsEnum.Page, "1");
    params.delete(ConstantsEnum.Query);
    params.delete(ConstantsEnum.Date);
    replace(LinksEnum.Home + term + "?" + params.toString());
    props.close();
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

export default Filters;
