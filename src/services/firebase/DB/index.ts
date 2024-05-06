import { Database, getDatabase, Reference } from "firebase-admin/database";
import { customInitApp } from "../admin";

class DB {
  private db: Database;
  private ref: Reference;

  constructor(ref: string) {
    this.db = getDatabase(customInitApp());
    this.ref = this.db.ref(ref);
  }

  addFavoriteCard<T extends object>(
    userId: string,
    cardId: string,
    value: T,
    onComplete?: (error: Error | null) => void
  ) {
    this.ref.child(userId).child(cardId).set(value, onComplete);
  }

  removeFavoriteCard(
    userId: string,
    cardId: string,
    onComplete?: (error: Error | null) => void
  ) {
    this.ref.child(userId).child(cardId).remove(onComplete);
  }
}

export default DB;
