import React from "react";
import styles from "./favorite.module.scss";
import { Favorites } from "./ui";

const FavoritePage = () => {
  return (
    <section className={styles["favorites"]}>
      <div className="layout">
        <div className="cards-container">
          <Favorites />
        </div>
      </div>
    </section>
  );
};

export default FavoritePage;
