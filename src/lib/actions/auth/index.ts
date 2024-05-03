"use server";

import { Auth } from "@/services";
import { JSONParser } from "@/utils";

const auth = new Auth();

export async function currentUser() {
  const res = await auth.currentUser();
  return JSONParser(res);
}

export async function login(
  email: string = "andri@mail.com",
  password: string = "123456"
) {
  const res = await auth.login(email, password);
  return JSONParser(res);
}

export async function register(
  email: string = "andri@mail.com",
  password: string = "123456"
) {
  const res = await auth.register(email, password);
  return JSONParser(res);
}
