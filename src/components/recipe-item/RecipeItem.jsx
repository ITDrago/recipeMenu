import React from "react";
import styles from "./RecipeItem.module.css";
import { useAction } from "../../hooks/useAction";
import { useFavorites } from "../../hooks/useFavorites";

const RecipeItem = ({ recipe }) => {

  const favorites = useFavorites();

  const { toogleFavorites } = useAction();

  const isExist = favorites.some((r) => r.id === recipe.id);

  console.log(favorites);
  return (
    <div className={styles.item}>
      {/* // <img src="" alt="" /> */}
      <h2>{recipe.name}</h2>
      <button onClick={() => toogleFavorites(recipe)}>
        {isExist ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
