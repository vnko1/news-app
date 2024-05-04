import { FirebaseApp, initializeApp, getApps, getApp } from "firebase/app";

const apiKey = process.env.F_API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const appId = process.env.APP_ID;

abstract class FireBaseApi {
  private firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };
  protected app: FirebaseApp;

  constructor() {
    this.app =
      getApps().length > 0 ? getApp() : initializeApp(this.firebaseConfig);
  }
}

export default FireBaseApi;
