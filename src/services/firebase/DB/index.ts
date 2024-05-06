import { Database, getDatabase, Reference } from "firebase-admin/database";
import { customInitApp } from "../adminConfig";

class DB {
  db: Database;
  ref: Reference;

  constructor(ref: string) {
    this.db = getDatabase(customInitApp());
    this.ref = this.db.ref(ref);
  }

  addData<T extends object>(
    childName: string,
    value: T,
    onComplete?: (error: Error | null) => void
  ) {
    this.ref.child(childName).set(value, onComplete);
  }
}

export default DB;
