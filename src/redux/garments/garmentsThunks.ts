import { createAsyncThunk } from "@reduxjs/toolkit";
import { setGarmentOptios, setGarments } from "./garmentsSlice";
import { apiCall } from "../../helpers/api";

export const fetchGarments = createAsyncThunk(
  "garments/fetchGarments",
  async (_, { dispatch }) => {
    try {
      const data = await apiCall("garments");
      if (data.success) {
        const { garments } = data;
        dispatch(setGarments(garments));
      }
    } catch (error) {
      console.error("garmentsThunks: Error while setting garments! ", error);
    }
  }
);

export const fetchGarmentOptions = createAsyncThunk(
  "garments/fetchGarmentOptions",
  async (_, { dispatch }) => {
    try {
      const data = await apiCall("garments/options");
      if (data.success) {
        const { garments } = data;
        dispatch(setGarmentOptios(garments));
      }
    } catch (error) {
      console.error(
        "garmentsThunks: Error while setting garment options! ",
        error
      );
    }
  }
);
