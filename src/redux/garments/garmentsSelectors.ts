import { RootState } from "../store";

export const selectGarments = (state: RootState) => state.garments.garments;
export const selectGarmentOptions = (state: RootState) =>
  state.garments.options;
