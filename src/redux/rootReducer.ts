import { combineReducers } from "@reduxjs/toolkit";
import diseases from "./Slices/users";

const reducer = combineReducers({
  diseases,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
