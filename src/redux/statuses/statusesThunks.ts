import { createAsyncThunk } from "@reduxjs/toolkit";
import { setStatuses } from "./statusesSlice";
import { apiCall } from "../../helpers/api";

export const fetchStatuses = createAsyncThunk(
  "statuses/fetchStatuses",
  async (_, { dispatch }) => {
    try {
      const data = await apiCall("statuses");
      if (data.success) {
        const { statuses } = data;
        dispatch(setStatuses(statuses));
      }
    } catch (error) {
      console.error("statusesThunks: Error while setting statuses");
    }
  }
);
