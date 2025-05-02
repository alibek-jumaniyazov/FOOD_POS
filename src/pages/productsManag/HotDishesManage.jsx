import React from "react";
import ProductManage from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductManage";
import MenuImg from "../../assets/images/MenuImg.png";
import ProductPost from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductPost";
import { useApi } from "../../context/ApiContext";

export default function HotDishesManage() {
  const { productsHot } = useApi();

  return (
    <div className="w-full HotDishesManage flex justify-center items-start">
      <div className="ProductManages h-[570px] flex flex-wrap gap-4 w-full overflow-y-auto">
        <ProductPost />
        {productsHot.map((orders) => (
          <ProductManage key={orders.id} orders={orders} />
        ))}
      </div>
    </div>
  );
}
