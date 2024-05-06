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

  getData(userId: string, dataType: string) {
    let data: unknown;
    this.reference
      .child(userId)
      .child(dataType)
      .on("value", (snapshot) => {
        data = snapshot.val();
      });
    return data;
  }

  addData<T extends object>(
    userId: string,
    dataType: string,
    id: string,
    value: T,
    onComplete?: (error: Error | null) => void
  ) {
    this.reference
      .child(userId)
      .child(dataType)
      .child(id)
      .set(value, onComplete);
  }

  removeData(
    userId: string,
    dataType: string,
    id: string,
    onComplete?: (error: Error | null) => void
  ) {
    this.reference.child(userId).child(dataType).child(id).remove(onComplete);
  }
}

export default DB;
