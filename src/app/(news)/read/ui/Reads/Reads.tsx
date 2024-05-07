"use client";
import React, { FC } from "react";
import { useProfileContext } from "@/context";
import { getDateArr } from "@/utils";

const Reads: FC = () => {
  const { read } = useProfileContext();
  const dates = getDateArr(read);
  console.log("🚀 ~ dates:", dates);

  return <div>Reads</div>;
};

export default Reads;
