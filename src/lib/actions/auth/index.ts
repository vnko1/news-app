"use server";

import Auth from "@/services/firebase/Auth";
import { JSONParser } from "@/utils";
import { UserCredential } from "firebase/auth";

const authProvider = new Auth();

export async function currentUser() {
  const res = await authProvider.currentUser();
  return JSONParser(res);
}

export async function login(cred: {
  email: string;
  password: string;
}): Promise<UserCredential> {
  const res = await authProvider.login(cred.email, cred.password);
  return JSONParser(res as UserCredential);
}

export async function signUp(cred: {
  email: string;
  password: string;
}): Promise<UserCredential> {
  console.log(cred);
  const res = await authProvider.register(cred.email, cred.password);
  return JSONParser(res as UserCredential);
}
