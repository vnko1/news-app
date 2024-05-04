"use client";

import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { IUser } from "@/types";
import { Auth } from "@/services";
import styles from "./Authenticate.module.scss";
import Image from "next/image";
import { IconButton, Menu, MenuItem } from "@mui/material";

const authProvider = new Auth();

const Authenticate: FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<null | IUser>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    fetch("/api/login").then(async (res) => {
      const cred = await res.json();
      setUser(cred.user);
    });
  }, []);

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
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const signIn = () => {
    signInWithRedirect(authProvider.auth, authProvider.provider);
  };

  const signOut = async () => {
    handleClose();
    await fetch("/api/logout", { method: "POST" });
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
        onClose={handleClose}
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

export default Authenticate;
