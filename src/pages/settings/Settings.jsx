import React from "react";

export default function Settings() {
  return (
    <div className="Settings flex flex-col justify-start items-center gap-6 !p-6 w-full h-screen">
      <h1 className="w-full text-start text-white text-[28px] font-[600]">
        Settings
      </h1>
      <div className="w-full h-full flex justify-between items-start gap-6">
        <div className="w-[30%] h-full bg-[#1F1D2B] rounded-lg"></div>
        <div className="w-[70%] h-full bg-[#1F1D2B] rounded-lg"></div>
      </div>
    </div>
  );
}
