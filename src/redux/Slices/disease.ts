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
  loading: false,
};

export const diseases = createSlice({
  name: "disease",
  initialState: initalState,
  reducers: {
    startSearching(state) {
      {
        state.loading = true;
      }
    },
    storeDiseaseResult(state, action: PayloadAction<Disease[]>) {
      {
        state.diseases = action.payload;
        state.loading = false;
      }
    },
  },
});

export const { storeDiseaseResult, startSearching } = diseases.actions;
export default diseases.reducer;
