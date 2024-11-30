import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../types/order";

interface StatusState {
  statuses: Status[];
}

const initialState: StatusState = {
  statuses: [],
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatuses(state, action: PayloadAction<Status[]>) {
      state.statuses = action.payload;
    },
  },
});

export const { setStatuses } = statusSlice.actions;
export default statusSlice.reducer;
