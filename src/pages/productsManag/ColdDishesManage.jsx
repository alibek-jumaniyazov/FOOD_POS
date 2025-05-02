import React, { useState } from "react";
import ProductPost from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductPost";
import ProductManage from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductManage";
import { useApi } from "../../context/ApiContext";
import ProductPostModal from "../../components/productsManag/ProductPostModal";

export default function ColdDishesManage() {
  const { productsCold } = useApi();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full HotDishesManage flex justify-center items-start">
      <div className="ProductManages h-[500px] flex flex-wrap gap-4 w-full overflow-y-auto">
        <ProductPost setIsOpen={setIsOpen} />
        {isOpen && (
          <ProductPostModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            defoultCategory={"colddishes"}
          />
        )}
        {productsCold.map((orders) => (
          <ProductManage key={orders.id} orders={orders} />
        ))}
      </div>
    </div>
  );
}
