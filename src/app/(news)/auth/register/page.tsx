import { JSONParser } from "@/utils";
import { AuthForm } from "../ui";
import { schema } from "./schema";

const fields = [
  { name: "email", label: "Enter your email", type: "text" },
  { name: "password", label: "Enter your password", type: "password" },
  { name: "repeat_password", label: "Repeat your password", type: "text" },
];

function RegisterPage() {
  return (
    <AuthForm
      auth="register"
      btnText="Register Your account"
      fields={fields}
      schema={JSONParser(schema)}
    />
  );
}

export default RegisterPage;
