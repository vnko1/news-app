"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { IconButton, Menu, MenuItem } from "@mui/material";

import { useProfileContext } from "@/context";
import Auth from "@/services/firebase/Auth";
import styles from "./Authentication.module.scss";

const authProvider = new Auth();

const Authentication: FC = () => {
  const router = useRouter();
  const { user, setUser, setFavId } = useProfileContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    fetch("/api/login").then(async (res) => {
      const cred = await res.json();
      setUser(cred.user);
    });
  }, [setUser]);

  useEffect(() => {
    getRedirectResult(authProvider.auth).then(async (userCred) => {
      if (!userCred) return;
      setUser({
        name: userCred.user.displayName || "",
        uid: userCred.user.uid,
        email: userCred.user.email || "",
        picture: userCred.user.photoURL || "",
      });
      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      });
    });
  }, [setUser]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };
  const signIn = () => {
    signInWithRedirect(authProvider.auth, authProvider.provider);
  };

  const signOut = async () => {
    close();
    await fetch("/api/logout", { method: "POST" });
    setFavId([]);
    setUser(null);
    router.refresh();
  };

  return user ? (
    <div className={styles["btn"]}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Image alt="avatar" src={user.picture} width={24} height={24} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={close}
      >
        <MenuItem onClick={signOut}>Log out</MenuItem>
      </Menu>
    </div>
  ) : (
    <button className={styles["btn"]} onClick={signIn}>
      Sign In
    </button>
  );
};

export default Authentication;
