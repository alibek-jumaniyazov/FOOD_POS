import React from "react";
import ProductPost from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductPost";
import ProductManage from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductManage";
import { useApi } from "../../context/ApiContext";

export default function ColdDishesManage() {
  const { productsCold } = useApi();

  return (
    <div className="w-full HotDishesManage flex justify-center items-start">
      <div className="ProductManages h-[570px] flex flex-wrap gap-4 w-full overflow-y-auto">
        <ProductPost />
        {productsCold.map((orders) => (
          <ProductManage key={orders.id} orders={orders} />
        ))}
      </div>
    </div>
  );
}
