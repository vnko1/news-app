import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  isActive?: boolean;
  classNames?: string;
  children: ReactNode;
  color?: "primary" | "secondary";
  icon?: boolean;
  customIcon?: { icon: string; size: number };
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
