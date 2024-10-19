import React from "react";
import OrderContainer from "../../sections/orders-section/OrdersSection";
import { Order, Status } from "../../types/order";
import NavBar from "../../components/navbar/NavBar";

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
      <NavBar />

      <div className="flex-1 p-4 ml-64">
        <h1 className="text-2xl font-bold mb-4">Manejo de Ordenes</h1>
        <OrderContainer orders={orders} />
      </div>
    </div>
  );
};

export default HomePage;
