import React from "react";
import Statistic from "../../components/dashboard/Statistic";
import OrderReports from "../../components/dashboard/OrderReports";
import MostType from "../../components/dashboard/MostType";
import MostOrders from "../../components/dashboard/MostOrders";
export default function Dashboard() {
  return (
    <div className="Dashboard flex justify-between items-start gap-6 !p-6 w-full h-screen">
      <div className="w-[60%] h-full flex flex-col justify-between items-start gap-6">
        <div className="!pb-6 w-full flex flex-col justify-center items-start border-b-[1px] border-[#393C49] gap-0.5">
          <h1 className="text-start text-white text-[28px] font-[600]">
            Dashboard
          </h1>
          <p className="text-[#ABBBC2] font-[400] text-[16px]">
            Tuesday 2 Feb, 2021
          </p>
        </div>
        <Statistic />
        <OrderReports />
      </div>
      <div className="flex flex-col gap-6 w-[40%] h-full">
        <MostOrders />
        <MostType />
      </div>
    </div>
  );
}
