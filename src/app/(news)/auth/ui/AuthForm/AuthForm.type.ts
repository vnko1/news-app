export type AuthFormProps = {
  fields: {
    name: string;
    label: string;
    type: string;
  }[];
  btnText: string;

  auth: "login" | "register";
};

export type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};
