import { useMemo } from "react";
import { actions } from "../store/favorites/favorites.slice.js";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
  ...actions,
};

export const useAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch),[dispatch]);
};
