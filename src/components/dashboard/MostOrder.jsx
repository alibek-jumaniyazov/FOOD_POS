import React from "react";
import MenuImg from "../../assets/images/MenuImg.png";

export default function MostOrder({ order }) {
  return (
    <div className="flex justify-start items-start gap-4 w-full">
      <img src={order.image} alt="" className="w-14 h-14" />
      <div className="flex flex-col justify-start items-start gap-1">
        <p className="text-[#E0E6E9] text-[14px] font-[500]">{order.title}</p>
        <span className="text-[#ABBBC2] text-[12px] font-[400]">
          {order.totalSold} dishes ordered
        </span>
      </div>
    </div>
  );
}
