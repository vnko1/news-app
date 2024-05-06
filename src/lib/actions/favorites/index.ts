"use server";

import DB from "@/services/firebase/DB";

const db = new DB("server/data");

export async function addFavorites() {
  db.addData("users", { andrii: { namde: "id" } });
}
