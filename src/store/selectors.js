import { createSelector } from "@reduxjs/toolkit";

export const selectGetCards = (state) => state.cards.items;
export const selectGetFilter = (state) => state.cards.filter;
export const selectIsLoading = (state) => state.cards.isLoading;
export const selectError = (state) => state.cards.error;

export const selectVisibleCards = createSelector(
  selectGetCards,
  selectGetFilter,
  (cards, filter) => {
    switch (filter) {
      case "AtoZ":
        return cards.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "ZtoA":
        return cards.slice().sort((a, b) => b.name.localeCompare(a.name));
      case "lessThen10":
        return cards.filter((card) => card.price_per_hour < 10);
      case "greaterThan10":
        return cards
          .filter((card) => card.price_per_hour > 10)
          .slice()
          .sort((a, b) => a.price_per_hour - b.price_per_hour);
      case "popular":
        return cards
          .filter((card) => card.rating >= 4.85)
          .slice()
          .sort((a, b) => b.rating - a.rating);
      case "notPopular":
        return cards
          .filter((card) => card.rating < 4.85)
          .slice()
          .sort((a, b) => a.rating - b.rating);
      case "showAll":
      default:
        return cards;
    }
  }
);

export const selectFavorites = (state) => state.cards.favorites;
export const selectVisibleFavorites = createSelector(
  selectFavorites,
  selectGetFilter,
  (cards, filter) => {
    switch (filter) {
      case "AtoZ":
        return cards.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "ZtoA":
        return cards.slice().sort((a, b) => b.name.localeCompare(a.name));
      case "lessThen10":
        return cards.filter((card) => card.price_per_hour < 10);
      case "greaterThan10":
        return cards
          .filter((card) => card.price_per_hour > 10)
          .slice()
          .sort((a, b) => a.price_per_hour - b.price_per_hour);
      case "popular":
        return cards
          .filter((card) => card.rating >= 4.85)
          .slice()
          .sort((a, b) => b.rating - a.rating);
      case "notPopular":
        return cards
          .filter((card) => card.rating < 4.85)
          .slice()
          .sort((a, b) => a.rating - b.rating);
      case "showAll":
      default:
        return cards;
    }
  }
);
