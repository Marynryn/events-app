import { createSlice } from "@reduxjs/toolkit";
import { eventRegistration, fetchEvents } from "./operations";

const mySlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    isLoading: false,
    error: null,

    filter: "",
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deselectFilter: (state) => {
      state.filter = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;

        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(eventRegistration.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(eventRegistration.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(eventRegistration.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const eventsReducer = mySlice.reducer;
export const { setFilter, deselectFilter } = mySlice.actions;
