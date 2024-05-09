import * as z from "zod";

export const schema = z
  .object({
    email: z
      .string({ required_error: "Email field is required" })
      .email("Enter a valid Email")
      .max(70, { message: "Maximum 70 characters" })
      .min(10, { message: "Minimum 10 characters" }),

    password: z
      .string({ required_error: "Password field is required" })
      .min(6, { message: "Enter 6 or more characters" })
      .max(16, { message: "Please enter 16 characters or less" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
