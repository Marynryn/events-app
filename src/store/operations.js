import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: "https://events-node-2.onrender.com/api/events/",
});

export const fetchEvents = createAsyncThunk("events", async (_, thunkAPI) => {
  try {
    const events = await api.get("/");

    return events.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const eventRegistration = createAsyncThunk(
  "events/addParticipants",
  async ({ id, data }, { rejectWithValue }) => {
    console.log(id, data);
    try {
      const contact = await api.patch(`/${id}/signup`, data);
      return contact.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
