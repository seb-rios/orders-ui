import React from "react";
import Card from "../card/Card";
import { Order } from "../../types/order";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <Card
      data={order}
      render={(order) => (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">Orden: {order.order_id}</h2>
              <span className="badge badge-primary badge-lg">
                {/* {order.quantity} */}10
              </span>
            </div>

            {/* <p className="text-sm text-gray-500">
              {order.receivedDate.toDateString()}
            </p> */}
            <p className="text-sm">{order.client_name}</p>

            <div className="flex gap-2 my-2">
              <span
                className={`badge ${order.prod_status.toLocaleLowerCase()}`}
              >
                {order.prod_status}
              </span>
            </div>

            <div className="flex gap-2 my-2">
              <span className="badge badge-info p-3">DryFood: 4</span>
              <span className="badge badge-success p-3">FreshFood: 2</span>
              <span className="badge badge-warning p-3">Frozen: 1</span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="btn btn-outline btn-primary">
                Ver detalles
              </button>
              {/* <span className="text-xs text-gray-500">
                Total Processing Time: {order.totalProcessingTime} hrs
              </span> */}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default OrderCard;
