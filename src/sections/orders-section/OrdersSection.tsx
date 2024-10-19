import React from "react";
import OrderCard from "../../components/order-card/OrderCard";
import { Order } from "../../types/order";

interface OrderContainerProps {
  orders: Order[];
}

const OrderContainer: React.FC<OrderContainerProps> = ({ orders }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderContainer;
