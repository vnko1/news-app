import React, { FC } from "react";
import { Button } from "@/components";
import { FiltersProps } from "./Filters.type";

const Filters: FC<FiltersProps> = ({ category }) => {
  console.log("🚀 ~ category:", category);
  return (
    <div>
      <Button icon>Categories</Button>
    </div>
  );
};

export default Filters;
