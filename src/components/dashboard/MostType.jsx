import React from "react";
import Chart from "./Chart";
import { Select } from "antd";
import { useApi } from "../../context/ApiContext";

export default function MostType() {
  const { orders } = useApi();

  const countTypes = orders
    .map((item) => item)
    .reduce((acc, order) => {
      acc[order.diningOption] = (acc[order.diningOption] || 0) + 1;
      return acc;
    }, {});

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="w-full h-[45%] bg-[#1F1D2B] rounded-lg">
      <div className="w-full flex justify-between items-center !p-6">
        <h1 className="text-white text-[20px] font-[600]">
          Most Type of Order
        </h1>
        <Select
          defaultValue="Today"
          style={{ width: 95 }}
          className="!h-[45px]"
          onChange={handleChange}
          options={[
            { value: "Today", label: "Today" },
            { value: "Take Away", label: "Take Away" },
            { value: "Delivery", label: "Delivery" },
            { value: "Catering", label: "Catering" },
          ]}
        />
      </div>
      <div className="w-full h-[1px] bg-[#393C49]"></div>
      <div className="flex justify-center items-center gap-6 !pt-8">
        <div className="relative w-[200px] h-[200px] bg-[#302f3a] rounded-full">
          <div className="absolute w-full h-full flex justify-center items-center z-0">
            <div className="absolute w-[98px] h-[98px] bg-[#1F1D2B] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"></div>
            <div className="absolute w-[135px] h-[135px] bg-[#302f3a] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30"></div>
            <div className="absolute w-[168px] h-[168px] bg-[#2a2936] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-40"></div>
          </div>
          <div className="!z-[999999999]">
            <Chart countTypes={countTypes} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex justify-start items-start gap-2">
            <div className="bg-[#FF7CA3] w-[18px] h-[18px] rounded-full"></div>
            <div className="flex flex-col justify-center items-start gap-0.5">
              <p className="text-white text-[14px] font-[500]">Dine In</p>
              <span className="text-[#ABBBC2] text-[12px] font-[400]">
                {countTypes["Dine In"] || 0} customers
              </span>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            <div className="bg-[#FFB572] w-[18px] h-[18px] rounded-full"></div>
            <div className="flex flex-col justify-center items-start gap-0.5">
              <p className="text-white text-[14px] font-[500]">To Go</p>
              <span className="text-[#ABBBC2] text-[12px] font-[400]">
                {countTypes["To Go"] || 0} customers
              </span>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            <div className="bg-[#65B0F6] w-[18px] h-[18px] rounded-full"></div>
            <div className="flex flex-col justify-center items-start gap-0.5">
              <p className="text-white text-[14px] font-[500]">Delivery</p>
              <span className="text-[#ABBBC2] text-[12px] font-[400]">
                {countTypes["Delivery"] || 0} customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
