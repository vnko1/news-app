import { Database, getDatabase, Reference } from "firebase-admin/database";
import { customInitApp } from "../admin";

class DB {
  private db: Database;
  private reference: Reference;

  constructor(ref: string) {
    this.db = getDatabase(customInitApp());
    this.reference = this.db.ref(ref);
  }

  get ref() {
    return this.reference;
  }

  getData(userId: string) {
    let data: unknown;
    this.reference.child(userId).on("value", (snapshot) => {
      data = snapshot.val();
    });
    return data;
  }

  addData<T extends object>(
    userId: string,
    cardId: string,
    value: T,
    onComplete?: (error: Error | null) => void
  ) {
    this.reference.child(userId).child(cardId).set(value, onComplete);
  }

  removeData(
    userId: string,
    cardId: string,
    onComplete?: (error: Error | null) => void
  ) {
    this.reference.child(userId).child(cardId).remove(onComplete);
  }
}

export default DB;
