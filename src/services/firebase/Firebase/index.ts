import { FirebaseApp, initializeApp, getApps, getApp } from "firebase/app";

abstract class FireBaseApi {
  private firebaseConfig = {
    apiKey: process.env.F_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
  protected app: FirebaseApp;

  constructor() {
    this.app =
      getApps().length > 0 ? getApp() : initializeApp(this.firebaseConfig);
  }
}

export default FireBaseApi;
