import React from "react";
import { OrderTable } from "../../components";
import { orders } from "../../constants/test";

const OrdersPage = () => {
  return (
    <div className="">
      <OrderTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
