import React from "react";

import { geFavoritesCards } from "@/lib";
import { JSONParser } from "@/utils";

import { Favorites } from "./ui";
import styles from "./favorite.module.scss";

const FavoritePage = async () => {
  const favorites = await geFavoritesCards();

  return (
    <section className={styles["favorites"]}>
      <div className="layout">
        <div className="cards-container">
          <Favorites favorites={JSONParser(favorites)} />
        </div>
      </div>
    </section>
  );
};

export default FavoritePage;
