import { createSlice } from "@reduxjs/toolkit";

const data = { count: 1 };
const dataSlice = createSlice({
  name: "moveis&series",
  initialState: data,
  reducers: {
    increament: (state, action) => {
      if (state.count < 500) {
        state.count++;
      }
    },
    decreament: (state, action) => {
      if (state.count > 1) {
        state.count--;
      }
    },
    lastNumber: (state, action) => {
      state.count = 500;
    },
    startNumber: (state, action) => {
      state.count = 1;
    }
  }
});
export const dataStatic = dataSlice.reducer;
export const { increament, decreament, lastNumber, startNumber } =
  dataSlice.actions;
