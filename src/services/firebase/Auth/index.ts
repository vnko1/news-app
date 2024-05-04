import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import FireBaseApi from "../Firebase";

class AuthApi extends FireBaseApi {
  private authenticate: Auth;
  private googleProvider: GoogleAuthProvider;
  private userData: User | null = null;

  constructor() {
    super();
    this.authenticate = getAuth(this.app);
    this.googleProvider = new GoogleAuthProvider();
  }

  get user() {
    return this.userData;
  }
  set user(newUser: User | null) {
    this.userData = newUser;
  }

  get auth() {
    return this.authenticate;
  }

  get provider() {
    return this.googleProvider;
  }

  async register(email: string, password: string) {
    try {
      const userCred = await createUserWithEmailAndPassword(
        this.authenticate,
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
        this.authenticate,
        email,
        password
      );

      return userCred;
    } catch (error) {
      return error;
    }
  }

  async currentUser() {
    onAuthStateChanged(this.authenticate, (user) => {
      this.user = user;
    });
    return this.user;
  }

  async logOut() {
    try {
      await signOut(this.authenticate);
    } catch (error) {
      return error;
    }
  }
}

export default AuthApi;
