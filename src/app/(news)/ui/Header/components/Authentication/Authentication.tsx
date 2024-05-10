"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, MenuItem } from "@mui/material";

import { useProfileContext } from "@/context";

import styles from "./Authentication.module.scss";
import { LinksEnum } from "@/types";

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

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };

  const signOut = async () => {
    close();
    await fetch("/api/logout", { method: "POST" });
    setFavId([]);
    setUser(null);
    router.refresh();
  };

  return user ? (
    <div className={styles["wrapper"]}>
      <button className={styles["btn"]} onClick={handleMenu}>
        {user.picture ? (
          <Image
            className={styles["img"]}
            alt="avatar"
            src={user.picture}
            width={24}
            height={24}
          />
        ) : (
          user.email
        )}
      </button>
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
    <div className={styles["wrapper"]}>
      <button
        className={styles["btn"]}
        onClick={() => router.push(LinksEnum.Login)}
      >
        Sign In
      </button>
      <button
        className={styles["btn"]}
        onClick={() => router.push(LinksEnum.Register)}
      >
        Register
      </button>
    </div>
  );
};

export default Authentication;
