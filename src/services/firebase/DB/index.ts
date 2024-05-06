import { getDatabase, Reference } from "firebase-admin/database";

class DB {
  db = getDatabase();
  ref: Reference;

  constructor(ref: string) {
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
