import React, { useEffect } from "react";
import OrderSection from "../../sections/orders-section/OrdersSection";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectOrders } from "../../redux/orders/ordersSelectors";
import { fetchOrders } from "../../redux/orders/ordersThunks";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="flex">
      <OrderSection orders={orders} />
    </div>
  );
};

export default HomePage;
