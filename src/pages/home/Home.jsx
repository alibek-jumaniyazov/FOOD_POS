import React from "react";
import { Icons } from "../../assets/Icons";

export default function Home() {
  return (
    <div className="Home flex flex-col gap-6 !p-6">
      <div className="oneBlock flex justify-between items-center">
        <div className="">
          <h1 className="text-[28px] font-bold">Jaegar Resto</h1>
          <p className="text-[16px] text-[#E0E6E9] font-[400]">Tuesday, 2 Feb 2021</p>
        </div>
        <div className="flex justify-start items-center gap-2 bg-[#2D303E] rounded-[8px] w-[250px]  !p-[14px] border-[1px] border-[#393C49]">
          <Icons.Search />
          <input type="text" placeholder="Search for food, coffe, etc.." className="!outline-none w-full" />
        </div>
      </div>
      <div className="twoBlock"></div>
      <div className="threeBlock">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
