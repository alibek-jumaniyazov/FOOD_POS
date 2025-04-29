import React from "react";
import PersonOrder from "../../assets/images/PersonOrder.png";
export default function UserOrder() {
  return (
    <div className="flex justify-between items-start w-full ">
      <div className="flex justify-start items-center gap-4">
        <div className="w-[32px] h-[32px] bg-[#50d1aa] rounded-full flex justify-center items-center">
          <img src={PersonOrder} alt="" className=" " />
        </div>
        <p className="text-[#E0E6E9] text-[14px] font-[400]">Eren Jaegar</p>
      </div>
      <p className="w-[137px] text-start text-[#E0E6E9] text-[14px] font-[400]">
        Spicy seasoned seafood noodles
      </p>
      <span className="text-start text-[#E0E6E9] text-[14px] font-[400]">
        $125
      </span>
      <div className="bg-[#6BE2BE3D] w-[90px] h-[26px] rounded-[30px] flex justify-center items-center">
        <span className="text-[#50d1aa] text-[14px] font-[400]">Completed</span>
      </div>
    </div>
  );
}
