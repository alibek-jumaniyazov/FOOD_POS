import React from "react";
import ProductManage from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductManage";
import MenuImg from "../../assets/images/MenuImg.png";
import ProductPost from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductPost";

export default function HotDishesManage() {
  const orders = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    availability: "20 Bowls available",
    image: MenuImg,
  }));

  return (
    <div className="w-full HotDishesManage flex flex-wrap justify-center items-start gap-4">
      <ProductPost/>
      <ProductManage orders={orders} />
    </div>
  );
}
