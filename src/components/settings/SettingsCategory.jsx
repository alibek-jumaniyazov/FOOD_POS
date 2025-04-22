import React from "react";

export default function SettingsCategory({ item, isActive }) {
  return (
    <div className="flex justify-center items-start gap-2 !p-6 font-[500] text-[16px] transition duration-300">
      <item.icon className={isActive ? "!fill-[#EA7C69] !mt-[2px]" : "!fill-[#ABBBC2] !mt-[2px]"} />
      <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-[14px] font-[500]">{item.label}</p>
        <span className="!text-[#ABBBC2] text-[12px] font-[400]">
          {item.desc}
        </span>
      </div>
    </div>
  );
}
