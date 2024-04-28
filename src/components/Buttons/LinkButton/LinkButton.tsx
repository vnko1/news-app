"use client";
import React, { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import cn from "classnames";

import { ConstantsEnum, LinksEnum } from "@/types";

import { LinkButtonProps } from "./LinkButton.type";
import styles from "./LinkButton.module.scss";

const LinkButton: FC<LinkButtonProps> = ({
  name,
  href,
  classNames,
  variant = "text",
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleCLick = () => {
    const params = new URLSearchParams(searchParams);
    params.set(ConstantsEnum.Page, "1");
    params.delete(ConstantsEnum.Query);
    replace(LinksEnum.Home + "/" + href + "?" + params.toString());
  };

  const buttonClassNames = cn(
    styles["button"],
    {
      [styles["text"]]: variant === "text",
      [styles["outlined"]]: variant === "outlined",
      [styles["active"]]: pathname === "/" + href,
    },
    classNames
  );

  return (
    <button onClick={handleCLick} className={buttonClassNames}>
      {name}
    </button>
  );
};

export default LinkButton;
