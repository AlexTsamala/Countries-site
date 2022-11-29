import { createSlice } from "@reduxjs/toolkit";

const initialState: { items: []; darkMode: boolean } = {
  items: [],
  darkMode: false,
};

const countriesListSlice = createSlice({
  name: "countries",
  initialState,

  reducers: {
    updateCountriesList: (state, action) => {
      state.items = action.payload;
    },
    changeDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const countriesListReducer = countriesListSlice.reducer;
export const countriesListActions = countriesListSlice.actions;
