"use client";

import React, { FC, useEffect } from "react";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { Auth } from "@/services";

const authProvider = new Auth();
const SignIn: FC = () => {
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
  const onClick = () => {
    signInWithRedirect(authProvider.auth, authProvider.provider);
  };
  return <button onClick={onClick}>Sign In</button>;
};

export default SignIn;
