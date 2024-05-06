"use server";

import DB from "@/services/firebase/DB";

const db = new DB("server");

export async function addFavorites() {
  db.addFavoriteCard("favorites", "Andrii", { name: "Andrii", age: 37 });
}
