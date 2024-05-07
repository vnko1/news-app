"use client";
import { useProfileContext } from "@/context";
import React, { FC } from "react";

const Reads: FC = () => {
  const { read } = useProfileContext();
  return <div>Reads</div>;
};

export default Reads;
