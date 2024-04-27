import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  isActive?: boolean;
  classNames?: string;
  children: ReactNode;
  color?: "primary" | "secondary";
  icon?: boolean;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
