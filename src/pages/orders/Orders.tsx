import React, { useEffect } from "react";
import { OrderTable } from "../../components";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectOrders } from "../../redux/orders/ordersSelectors";
import { fetchOrders } from "../../redux/orders/ordersThunks";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="">
      <OrderTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
