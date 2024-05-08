"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { auth } from "firebase-admin";

import { DBResponseType, IArticle, LinksEnum } from "@/types";
import { JSONParser } from "@/utils";
import DB from "@/services/firebase/DB";

const db = new DB("server");

export async function addFavoriteCard(
  userId: string,
  favoriteCard: Omit<IArticle, "read_date">
) {
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

export async function geFavoritesCards(): Promise<DBResponseType | null> {
  const session = cookies().get("session")?.value || "";
  const user = await auth().verifySessionCookie(session, true);
  return new Promise((res, rej) => {
    db.ref
      .child(user.uid)
      .child("favorites")
      .on(
        "value",
        async (snapshot) => {
          res(snapshot.val());
        },
        (error) => rej(error)
      );
  });
}
