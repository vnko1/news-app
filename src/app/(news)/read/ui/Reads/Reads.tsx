"use client";
import React, { FC } from "react";
import { useProfileContext } from "@/context";
import { DBResponseType } from "@/types";

function getReadsData(readData: DBResponseType | null) {
  if (!readData) return null;
  const readArr = Object.keys(readData);
  const d = readArr.reduce((acc, el) => {
    console.log(readData[el]);
  }, {});

  return null;
}
const Reads: FC = () => {
  const { read } = useProfileContext();

  getReadsData(read);

  return <div>Reads</div>;
};

export default Reads;
