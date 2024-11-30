import { createAsyncThunk } from "@reduxjs/toolkit";
import { setOrders } from "./ordersSlice";
import { apiCall } from "../../helpers/api";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { dispatch }) => {
    try {
      const data = await apiCall("orders");
      if (data.success) {
        const { orders } = data;
        dispatch(setOrders(orders));
      }
    } catch (error) {
      console.error("ordersThunks: Error while setting orders! ", error);
    }
  }
);
