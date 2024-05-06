"use server";

import DB from "@/services/firebase/DB";
import { DBResponseType, IArticle } from "@/types";
import { JSONParser } from "@/utils";

const db = new DB("server");

export async function addReadCard(userId: string, readCard: IArticle) {
  db.addData(userId, "read", readCard.id + "", {
    ...readCard,
    date: Date.now(),
  });
}

export async function deleteReadCard(userId: string, cardId: string) {
  db.removeData(userId, "read", cardId);
}

export async function getReadCards(userId: string): Promise<DBResponseType> {
  const res = await db.getData(userId, "read");
  return JSONParser((res as DBResponseType) || null);
}
