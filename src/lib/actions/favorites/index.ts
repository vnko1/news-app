"use server";

import DB from "@/services/firebase/DB";
import { IArticle } from "@/types";

const db = new DB("server/favorites");

export async function addFavoriteCard(userId: string, favoriteCard: IArticle) {
  db.addFavoriteCard(userId, favoriteCard.id + "", favoriteCard);
}

export async function deleteFavoriteCard(userId: string, cardId: string) {
  db.removeFavoriteCard(userId, cardId);
}
