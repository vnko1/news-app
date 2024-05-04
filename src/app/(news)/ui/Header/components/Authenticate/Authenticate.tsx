"use client";

import React, { FC, useEffect, useState } from "react";
import { getRedirectResult, signInWithRedirect, User } from "firebase/auth";
import { Auth } from "@/services";
import styles from "./Authenticate.module.scss";

const authProvider = new Auth();

const Authenticate: FC = () => {
  const [user] = useState<null | User>(null);

  useEffect(() => {
    getRedirectResult(authProvider.auth).then(async (userCred) => {
      if (!userCred) return;

      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      });
    });
  }, []);

  const signIn = () => {
    signInWithRedirect(authProvider.auth, authProvider.provider);
  };

  const signOut = () => {
    fetch("/api/logout", { method: "POST" });
  };
  return user ? (
    <button className={styles["btn"]} onClick={signOut}>
      {user.displayName}
    </button>
  ) : (
    <button className={styles["btn"]} onClick={signIn}>
      Sign In
    </button>
  );
};

export default Authenticate;
