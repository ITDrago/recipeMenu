import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser } from "./favorites/favorites.slice";

const reducers = combineReducers({
    favorites : favoritesReduser,
})
export const store = configureStore({
    reducer: reducers
})