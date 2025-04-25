import React from "react";

export default function Dashboard() {
  return (
    <div className="Dashboard flex justify-center items-start gap-6 !p-6 w-full h-screen">
      <div className="w-full h-full flex flex-col justify-start items-start gap-6">
        <div className="w-ful flex flex-col justify-start items-center border-b-[1px] border-[#393C49]">
          <h1 className="w-full text-start text-white text-[28px] font-[600]">
            Dashboard
          </h1>
          <p className="text-[#889898] font-[400] text-[16px]">
            Tuesday 2 Feb, 2021
          </p>
        </div>
        <div className="">
          <div className="">
            <div className=""></div>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
