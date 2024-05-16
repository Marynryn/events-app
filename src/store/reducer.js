import { createSlice } from "@reduxjs/toolkit";
import {
  eventRegistration,
  fetchEvents,
  fetchParticipants,
} from "./operations";

const mySlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    participants: [],
    filter: "showAll",
    participantsFilter: "",
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deselectFilter: (state) => {
      state.filter = "";
    },
    addFilter: (state, action) => {
      state.participantsFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
      
        state.isLoading = false;
        state.error = null;

        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
   
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(eventRegistration.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(eventRegistration.fulfilled, (state, action) => {
      
        state.isLoading = false;
        state.error = null;
      })
      .addCase(eventRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchParticipants.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.error = null;
        state.participants = action.payload;
      })
      .addCase(fetchParticipants.rejected, (state, action) => {
       
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const eventsReducer = mySlice.reducer;
export const { setFilter, deselectFilter, addFilter } = mySlice.actions;
