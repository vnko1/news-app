"use server";
import { revalidatePath } from "next/cache";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";

import { DBResponseType, IArticle, LinksEnum } from "@/types";
import { formatDate, JSONParser } from "@/utils";
import DB from "@/services/firebase/DB";

const db = new DB("server");

export async function addReadCard(
  userId: string,
  readCard: Omit<IArticle, "read_date">
) {
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

export async function getReadsCards(): Promise<DBResponseType | null> {
  const session = cookies().get("session")?.value || "";
  const user = await auth().verifySessionCookie(session, true);
  return new Promise((res, rej) => {
    db.ref
      .child(user.uid)
      .child("read")
      .on(
        "value",
        (snapshot) => {
          res(snapshot.val());
        },
        (error) => rej(error)
      );
  });
}
