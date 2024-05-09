"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconButton, Menu, MenuItem } from "@mui/material";

import { useProfileContext } from "@/context";

import styles from "./Authentication.module.scss";
import { LinksEnum } from "@/types";

const Authentication: FC = () => {
  const router = useRouter();
  const { user, setUser, setFavId } = useProfileContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
    <div className={styles["btn"]}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {user.picture ? (
          <Image alt="avatar" src={user.picture} width={24} height={24} />
        ) : (
          user.email
        )}
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
    <>
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
    </>
  );
};

export default Authentication;
