"use client";

import React, { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";

import { useProfileContext } from "@/context";
import Auth from "@/services/firebase/Auth";

import styles from "./AuthByGoogle.module.scss";
import { LinksEnum } from "@/types";

const authProvider = new Auth();

const AuthByGoogle: FC = () => {
  const router = useRouter();
  const { setUser } = useProfileContext();

  useEffect(() => {
    getRedirectResult(authProvider.auth).then(async (userCred) => {
      if (!userCred) return;
      setUser({
        name: userCred.user.displayName,
        uid: userCred.user.uid,
        email: userCred.user.email,
        picture: userCred.user.photoURL,
      });
      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      });
      router.push(LinksEnum.Home);
    });
  }, [router, setUser]);

  const signIn = () => {
    signInWithRedirect(authProvider.auth, authProvider.provider);
  };

  return (
    <button className={styles["btn"]} onClick={signIn}>
      Sign In by Google
    </button>
  );
};

export default AuthByGoogle;
