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

export const diseases = createSlice({
  name: "disease",
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
  diseases.actions;
export default diseases.reducer;
