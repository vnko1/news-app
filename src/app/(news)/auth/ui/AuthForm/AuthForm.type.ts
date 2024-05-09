export type AuthFormProps = {
  fields: {
    name: string;
    label: string;
    type: string;
  }[];
  btnText: string;

  auth: "login" | "register";
};
