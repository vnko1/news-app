import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  classNames?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: boolean;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
