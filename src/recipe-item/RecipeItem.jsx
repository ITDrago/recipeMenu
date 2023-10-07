import React from "react";
import styles from "./RecipeItem.module.css"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";

const RecipeItem = ({recipe}) => {

  const favorites = useSelector((state) => state.favorites)

  const dispatch = useDispatch()

  const isExist = favorites.some(r => r.id === recipe.id) 

  console.log(favorites)
  return (
    <div className={styles.item}>
      {/* // <img src="" alt="" /> */}
      <h2>{recipe.name}</h2>
      <button onClick={() => dispatch(actions.toogleFavorites(recipe))}>{ isExist ? 'Add to' : 'Remove from'} favorites</button>
    </div>
  );
};

export default RecipeItem;
