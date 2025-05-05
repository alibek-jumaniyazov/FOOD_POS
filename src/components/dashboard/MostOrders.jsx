import React from "react";
import { Select } from "antd";
import { useApi } from "../../context/ApiContext";
import MostOrder from "./MostOrder";

export default function MostOrders() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { mostOrders } = useApi();

  return (
    <div className="w-full !h-[55%] bg-[#1F1D2B] rounded-lg !p-6">
      <div className="w-full flex justify-between items-center border-b border-[#393C49] !pb-5">
        <h1 className="text-white text-[20px] font-[600]">Most Ordered</h1>
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
      <div className="flex flex-col justify-start items-start gap-6 w-full h-[70%] overflow-y-auto !py-6">
        {mostOrders.map((order) => (
          <MostOrder order={order} />
        ))}
      </div>
      <button className="w-full !p-3.5 text-[#EA7C69] bg-transparent border border-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]">
        View All
      </button>
    </div>
  );
}
