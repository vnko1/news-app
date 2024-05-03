import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import FireBaseApi from "../Firebase";

class AuthApi extends FireBaseApi {
  private auth: Auth;
  user: User | null = null;

  constructor() {
    super();
    this.auth = getAuth(this.app);
  }

  async register(email: string, password: string) {
    try {
      const userCred = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return userCred;
    } catch (error) {
      return error;
    }
  }

  async login(email: string, password: string) {
    try {
      const userCred = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return userCred;
    } catch (error) {
      return error;
    }
  }

  async currentUser() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
    return this.user;
  }

  async logOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      return error;
    }
  }
}

export default AuthApi;
