import React, { useState } from "react";
import ProductManage from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductManage";
import ProductPost from "../../components/settings/SettingsComponents/ProductManagCompnents/ProductPost";
import { useApi } from "../../context/ApiContext";
import ProductPostModal from "../../components/productsManag/ProductPostModal";

export default function HotDishesManage() {
  const { productsHot } = useApi();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full HotDishesManage flex justify-center items-start">
      <div className="ProductManages h-[500px] flex flex-wrap gap-4 w-full overflow-y-auto">
        <ProductPost setIsOpen={setIsOpen} />
        {isOpen && (
          <ProductPostModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            defoultCategory={"hotdishes"}
          />
        )}
        {productsHot.map((orders) => (
          <ProductManage key={orders.id} orders={orders} />
        ))}
      </div>
    </div>
  );
}
