"use client";
import React, { FC } from "react";
import { useProfileContext } from "@/context";

const Reads: FC = () => {
  const { read } = useProfileContext();

  return <div>Reads</div>;
};

export default Reads;
