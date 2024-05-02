import { IOrder } from "@/types";
import React from "react";
import OrderCard from "../OrderCard";

async function OrdersContainer() {
  const ordersFetch = await fetch("http://localhost:3001/users/orders", {
    method: "get",
    headers: new Headers({ Authorization: `` }),
  });
  const orders = await ordersFetch.json();
  return (
    <div className="mx-8">
      {orders.map((order: IOrder) => {
        return <OrderCard key={order.id} {...order}></OrderCard>;
      })}
    </div>
  );
}

export default OrdersContainer;
