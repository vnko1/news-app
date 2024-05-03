"use server";

import { Auth } from "@/services";

const auth = new Auth();

export async function currentUser() {
  await auth.currentUser();
}
