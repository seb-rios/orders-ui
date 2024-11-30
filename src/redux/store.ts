import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orders/ordersSlice";
import statusesReducer from "./statuses/statusesSlice";
import garmentsReducer from "./garments/garmentsSlice";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    statuses: statusesReducer,
    garments: garmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
