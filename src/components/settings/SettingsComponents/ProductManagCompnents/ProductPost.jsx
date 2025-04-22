import React from "react";
import { Icons } from "../../../../assets/Icons";

export default function ProductPost() {
  return (
    <div className="ProductPost cursor-pointer active:scale-[90%] !w-[221px] !h-[299px] border border-dashed border-[#EA7C69] rounded-[8px] flex flex-col items-center justify-center gap-4  transition-all duration-300 ">
      <Icons.plus className="text-2xl" />
      <h1 className="text-[16px] font-[600]">Add new dish</h1>
    </div>
  );
}
