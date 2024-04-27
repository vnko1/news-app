"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useModal } from "@/hooks";
import { Button } from "@/components";

import { Popup } from "./components";

import { CategoriesProps } from "./Categories.type";
import styles from "./Categories.module.scss";
import { ConstantsEnum } from "@/types";

const Categories: FC<CategoriesProps> = ({ categories }) => {
  const props = useModal();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <div className={styles["categories"]}>
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
    </div>
  );
};

export default Categories;
