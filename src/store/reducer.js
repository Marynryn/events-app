import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
    filter: "AtoZ",
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deselectFilter: (state) => {
      state.filter = "";
    },
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.name !== payload
      );
    },
    setCards: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  },
});

export const cardsReducer = mySlice.reducer;
export const {
  setFilter,
  deselectFilter,
  addToFavorites,
  removeFromFavorites,
  setCards,
} = mySlice.actions;
