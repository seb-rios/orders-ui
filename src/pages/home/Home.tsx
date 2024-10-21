import React from "react";
import OrderContainer from "../../sections/orders-section/OrdersSection";
import { Order, Status } from "../../types/order";

//sample data
const orders: Order[] = [
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
  {
    id: "12345",
    client: "BAC Costa Rica",
    quantity: "100",
    status: Status.IN_PROFRESS,
    receivedDate: new Date(),
    completedDate: new Date(),
    deliveryDate: new Date(),
    totalProcessingTime: 48,
  },
];

const HomePage = () => {
  return (
    <div className="flex">
      <OrderContainer orders={orders} />
    </div>
  );
};

export default HomePage;
