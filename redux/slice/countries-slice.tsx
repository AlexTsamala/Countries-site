import { createSlice } from "@reduxjs/toolkit";

const initialState: { items: [] } = {
  items: [],
};

const countriesListSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    updateCountriesList: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const countriesListReducer = countriesListSlice.reducer;
export const countriesListActions = countriesListSlice.actions;
