"use server";
import { revalidatePath } from "next/cache";

import { DBResponseType, IArticle, LinksEnum } from "@/types";
import { formatDate, JSONParser } from "@/utils";
import DB from "@/services/firebase/DB";

const db = new DB("server");

export async function addReadCard(userId: string, readCard: IArticle) {
  db.addData(userId, "read", readCard.id + "", {
    ...readCard,
    read_date: formatDate(),
  });
  revalidatePath(LinksEnum.Read);
}

export async function deleteReadCard(userId: string, cardId: string) {
  db.removeData(userId, "read", cardId);

  revalidatePath(LinksEnum.Read);
}

export async function getReadCards(userId: string): Promise<DBResponseType> {
  const res = await db.getData(userId, "read");
  return JSONParser((res as DBResponseType) || null);
}
