import React from "react";
import { Icons } from "../../assets/icons";
export default function Statistic() {
  return (
    <div className="flex justify-between items-center w-full gap-6">
      <div className="flex flex-col justify-between items-start w-[230px] h-[143px] bg-[#1F1D2B] !p-4 rounded-lg">
        <div className="w-full flex justify-start items-center gap-3">
          <div className="w-[38px] h-[38px] bg-[#252836] !p-2 rounded-lg flex justify-center items-center">
            <Icons.coin />
          </div>
          <span className="text-[#50D1AA] text-[12px] font-[500]">+32.40%</span>
          <div className="w-[18px] h-[18px] bg-[#88E0913D] !p-[1px] rounded-full flex justify-center items-center">
            <Icons.TopArroww />
          </div>
        </div>
        <h1 className="text-white text-[28px] font-[600]">$10,243.00</h1>
        <p className="text-[#ABBBC2] text-[14px] font-[500]">Total Revenue</p>
      </div>
      <div className="flex flex-col justify-between items-start w-[230px] h-[143px] bg-[#1F1D2B] !p-4 rounded-lg">
        <div className="w-full flex justify-start items-center gap-3">
          <div className="w-[38px] h-[38px] bg-[#252836] !p-2 rounded-lg flex justify-center items-center">
            <Icons.SavedOrder />
          </div>
          <span className="text-[#FF7CA3] text-[12px] font-[500]">-12.40%</span>
          <div className="w-[18px] h-[18px] bg-[#FF64713D] !p-[1px] rounded-full flex justify-center items-center">
            <Icons.BottomArroww />
          </div>
        </div>
        <h1 className="text-white text-[28px] font-[600]">23,456</h1>
        <p className="text-[#ABBBC2] text-[14px] font-[500]">Total Revenue</p>
      </div>
      <div className="flex flex-col justify-between items-start w-[230px] h-[143px] bg-[#1F1D2B] !p-4 rounded-lg">
        <div className="w-full flex justify-start items-center gap-3">
          <div className="w-[38px] h-[38px] bg-[#252836] !p-2 rounded-lg flex justify-center items-center">
            <Icons.customers />
          </div>
          <span className="text-[#50D1AA] text-[12px] font-[500]">+2.40%</span>
          <div className="w-[18px] h-[18px] bg-[#88E0913D] !p-[1px] rounded-full flex justify-center items-center">
            <Icons.TopArroww />
          </div>
        </div>
        <h1 className="text-white text-[28px] font-[600]">1,234</h1>
        <p className="text-[#ABBBC2] text-[14px] font-[500]">Total Revenue</p>
      </div>
    </div>
  );
}
