import MyOrders from "@/app/components/MyOrders";
import React from "react";

export default async function HomeBrokerPage({
  params,
}: {
  params: { wallet_id: string; asset_id: string };
}) {
  return (
    <div>
      <h1>Home Broker</h1>
      <div className="flex flex-row ">
        <div className="flex flex-col">
          <div>formulário</div>
          <MyOrders wallet_id={params.wallet_id} />
        </div>
        <div>grafico</div>
      </div>
    </div>
  );
}
