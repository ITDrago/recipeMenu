import { useMemo } from "react";
import { actions } from "../store/favorites/favorites.slice.js";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {getUserById} from '../store/user/user.actions.js'

const rootActions = {
  ...actions,
  getUserById,
};

export const useAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch),[dispatch]);
};
