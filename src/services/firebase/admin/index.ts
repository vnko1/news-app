import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
  }),
  databaseURL: process.env.DB_URL,
};

export function customInitApp() {
  if (getApps().length <= 0) {
    return initializeApp(firebaseAdminConfig);
  }
  return getApps()[0];
}
