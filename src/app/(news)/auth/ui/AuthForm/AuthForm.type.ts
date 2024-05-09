import { ZodTypeAny } from "zod";

export type AuthFormProps<T extends ZodTypeAny> = {
  fields: {
    name: string;
    label: string;
    type: string;
  }[];
  btnText: string;
  schema: T;
  auth: "login" | "register";
};
