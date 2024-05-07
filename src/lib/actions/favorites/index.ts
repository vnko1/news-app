"use server";
import { revalidatePath } from "next/cache";

import { DBResponseType, IArticle, LinksEnum } from "@/types";
import { JSONParser } from "@/utils";
import DB from "@/services/firebase/DB";

const db = new DB("server");

export async function addFavoriteCard(userId: string, favoriteCard: IArticle) {
  db.addData(userId, "favorites", favoriteCard.id + "", favoriteCard);
  revalidatePath(LinksEnum.Favorite);
}

export async function deleteFavoriteCard(userId: string, cardId: string) {
  db.removeData(userId, "favorites", cardId);
  revalidatePath(LinksEnum.Favorite);
}

export async function getFavoriteCards(
  userId: string
): Promise<DBResponseType> {
  const res = await db.getData(userId, "favorites");
  return JSONParser((res as DBResponseType) || null);
}
