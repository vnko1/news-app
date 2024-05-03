import { FirebaseApp, initializeApp } from "firebase/app";

abstract class FireBaseApi {
  private static instance: FireBaseApi;
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
    if (!FireBaseApi.instance) {
      FireBaseApi.instance = this;
    }
    this.app = initializeApp(this.firebaseConfig);

    return FireBaseApi.instance;
  }
}

export default FireBaseApi;
