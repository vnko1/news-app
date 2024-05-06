"use server";

import DB from "@/services/firebase/DB";
import { DBResponseType, IArticle } from "@/types";
import { JSONParser } from "@/utils";

const db = new DB("server");

export async function addFavoriteCard(userId: string, favoriteCard: IArticle) {
  db.addData(userId, "favorites", favoriteCard.id + "", favoriteCard);
}

export async function deleteFavoriteCard(userId: string, cardId: string) {
  db.removeData(userId, "favorites", cardId);
}

export async function getFavoriteCards(
  userId: string
): Promise<DBResponseType> {
  const res = await db.getData(userId, "favorites");
  return JSONParser((res as DBResponseType) || null);
}
