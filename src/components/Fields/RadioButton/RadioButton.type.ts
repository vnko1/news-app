import { InputHTMLAttributes } from "react";

export type RadioButtonProps = {
  label: string;
  variant?: "text" | "outlined";
} & Required<
  Pick<InputHTMLAttributes<HTMLInputElement>, "value" | "name" | "checked">
> &
  Partial<InputHTMLAttributes<HTMLInputElement>>;
