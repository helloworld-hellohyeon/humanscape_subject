import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Disease {
  id: number;
  name: string;
}

export const diseases = createSlice({
  name: "disease",
  initialState: [] as Disease[],
  reducers: {
    storeDiseaseResult(state, action: PayloadAction<Disease[]>) {
      return action.payload;
    },
  },
});

export const { storeDiseaseResult } = diseases.actions;
export default diseases.reducer;
