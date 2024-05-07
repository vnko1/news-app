"use client";
import { useProfileContext } from "@/context";
import formatDate from "@/utils/formatDate";
import React, { FC } from "react";

const Reads: FC = () => {
  const { read } = useProfileContext();

  console.log(formatDate());

  return <div>Reads</div>;
};

export default Reads;
