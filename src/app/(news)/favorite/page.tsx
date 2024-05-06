"use client";
import { addFavorites } from "@/lib";
import React from "react";

const FavoritePage = () => {
  return (
    <section>
      <div className={`layout`}>
        FavoritePage
        <button
          onClick={async () => {
            await addFavorites();
          }}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default FavoritePage;
