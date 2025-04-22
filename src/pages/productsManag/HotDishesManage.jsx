import React from "react";
import { Icons } from "../../assets/Icons";
import ProductManage from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductManage";
import MenuImg from "../../assets/images/MenuImg.png";

export default function HotDishesManage() {
  const orders = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    availability: "20 Bowls available",
    image: MenuImg,
  }));

  return (
    <div className="w-full HotDishesManage flex flex-wrap justify-center items-center gap-4">
      <div className="cursor-pointer active:scale-[80%] !w-[221px] !h-[299px] border border-dashed border-[#EA7C69] rounded-[8px] flex flex-col items-center justify-center gap-4  transition-all duration-300 ">
        <Icons.plus className="text-2xl text-white" />
        <h1 className="text-[16px] text-[#EA7C69] font-[600]">Add new dish</h1>
      </div>
      <ProductManage orders={orders} />
    </div>
  );
}
