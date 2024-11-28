import React from "react";
import OrderCard from "../../components/order-card/OrderCard"; // Assume you're using DaisyUI card in OrderCard
import { Order } from "../../types/order";

interface OrderSectionProps {
  orders: Order[];
}

const OrderSection: React.FC<OrderSectionProps> = ({ orders }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold px-4">Órdenes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders &&
            orders.map((order, index) => (
              <OrderCard key={index} order={order} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
