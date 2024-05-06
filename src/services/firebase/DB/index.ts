import { Database, getDatabase, Reference } from "firebase-admin/database";
import { customInitApp } from "../admin";

class DB {
  db: Database;
  ref: Reference;

  constructor(ref: string) {
    this.db = getDatabase(customInitApp());
    this.ref = this.db.ref(ref);
  }

  addData<T extends object>(
    childName: string,
    id: string,
    value: T,
    onComplete?: (error: Error | null) => void
  ) {
    this.ref.child(childName).child(id).set(value, onComplete);
  }
}

export default DB;
