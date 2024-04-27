import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  isActive?: boolean;
  classNames?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: boolean;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
