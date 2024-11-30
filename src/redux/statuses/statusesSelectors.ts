import { RootState } from "../store";

export const selectStatuses = (state: RootState) => state.statuses.statuses;
