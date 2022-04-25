import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Disease = {
  id: number;
  name: string;
};

export type State = {
  diseases: Disease[];
  loading?: boolean;
};

const initalState = {
  diseases: [] as Disease[],
  loading: true,
};

export const search = createSlice({
  name: "search",
  initialState: initalState,
  reducers: {
    startSearching(state) {
      state.loading = true;
    },
    endSearching(state) {
      state.loading = false;
    },
    storeDiseaseResult(state, action: PayloadAction<Disease[]>) {
      state.diseases = action.payload;
    },
  },
});

export const { storeDiseaseResult, startSearching, endSearching } =
  search.actions;
export default search.reducer;
