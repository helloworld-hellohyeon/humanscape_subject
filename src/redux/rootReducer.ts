import { combineReducers } from "@reduxjs/toolkit";
import search from "./Slices/search";

const reducer = combineReducers({
  diseases: search,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
