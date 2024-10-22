import React from "react";
import OrderSection from "../../sections/orders-section/OrdersSection";
import { orders } from "../../constants/test";

const HomePage = () => {
  return (
    <div className="flex">
      <OrderSection orders={orders} />
    </div>
  );
};

export default HomePage;
