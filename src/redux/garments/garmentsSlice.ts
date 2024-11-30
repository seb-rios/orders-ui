import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Garments, GarmentOptions } from "../../types/garments";

interface GarmentsState {
  garments: Garments[];
  options: GarmentOptions[];
}

const initialState: GarmentsState = {
  garments: [],
  options: [],
};

const garmentSlice = createSlice({
  name: "garments",
  initialState,
  reducers: {
    setGarments(state, action: PayloadAction<Garments[]>) {
      state.garments = action.payload;
    },
    setGarmentOptios(state, action: PayloadAction<GarmentOptions[]>) {
      state.options = action.payload;
    },
  },
});

export const { setGarments, setGarmentOptios } = garmentSlice.actions;
export default garmentSlice.reducer;
