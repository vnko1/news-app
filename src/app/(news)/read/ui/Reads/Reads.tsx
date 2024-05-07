"use client";
import React, { FC } from "react";
import { NotFoundComponent } from "@/components";
import { useProfileContext } from "@/context";
import { getDateArr } from "@/utils";

const Reads: FC = () => {
  const { read } = useProfileContext();
  const dates = getDateArr(read);
  console.log("🚀 ~ dates:", dates);

  return (
    <NotFoundComponent
      classNames="cards-not-found"
      message="You haven't read any news yet"
    />
  );
};

export default Reads;
