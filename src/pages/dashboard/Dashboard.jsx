import React from "react";
import { Icons } from "../../assets/icons";
import { Select } from "antd";
import MenuImg from "../../assets/images/MenuImg.png";
import { useState } from "react";
export default function Dashboard() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="Dashboard flex justify-between items-start gap-6 !p-6 w-full h-screen">
      <div className="w-[60%] h-full flex flex-col justify-between items-start gap-6">
        <div className="!pb-6 w-full flex flex-col justify-center items-start border-b-[1px] border-[#393C49] gap-0.5">
          <h1 className="text-start text-white text-[28px] font-[600]">
            Dashboard
          </h1>
          <p className="text-[#ABBBC2] font-[400] text-[16px]">
            Tuesday 2 Feb, 2021
          </p>
        </div>
        <div className="flex justify-between items-center w-full gap-6">
          <div className="w-[230px] h-[143px] bg-[#1F1D2B] !p-4 rounded-lg">
            <div className="">
              <div className=""></div>
              <span>+32.40%</span>
              <div className=""></div>
            </div>
            <h1>$10,243.00</h1>
            <p>Total Revenue</p>
          </div>
          <div className="w-[230px] h-[143px] bg-[#1F1D2B] !p-4 rounded-lg">
            <div className="">
              <div className=""></div>
              <span>-12.40%</span>
              <div className=""></div>
            </div>
            <h1>23,456</h1>
            <p>Total Revenue</p>
          </div>
          <div className="w-[230px] h-[143px] bg-[#1F1D2B] !p-4 rounded-lg">
            <div className="">
              <div className=""></div>
              <span>+2.40%</span>
              <div className=""></div>
            </div>
            <h1>1,234</h1>
            <p>Total Revenue</p>
          </div>
        </div>
        <div className="w-full !h-full bg-[#1F1D2B] rounded-lg">
          <div className="">
            <div className="w-full flex justify-between items-center !p-6">
              <h1 className="text-white text-[20px] font-[600]">
                Order Report
              </h1>
              <button className="cursor-pointer !p-4 border border-[#393C49] gap-2 rounded-[8px] flex justify-center items-center  transition-all duration-300 active:scale-[80%] bg-transparent text-white text-[14px] font-[500]  hover:text-white hover:!border-[#EA7C69]">
                <Icons.filter /> Filter Order
              </button>
            </div>
            <div className="flex justify-between items-center w-full gap-6 !px-6 !pb-4">
              <span>Customer</span>
              <span>Menu</span>
              <span>Total Payment</span>
              <span>Status</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#393C49]"></div>
          <div className="w-full flex flex-col justify-center items-start !p-6">
            <div className="flex justify-between items-start w-full ">
              <div className="">
                <img src="" alt="" />
                <p>Eren Jaegar</p>
              </div>
              <p className="w-[137px] text-start">
                Spicy seasoned seafood noodles{" "}
              </p>
              <span className=" text-start">$125</span>
              <div className="">
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-[40%] h-full">
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
            <div className="flex justify-start items-start gap-4 w-full">
              <img src={MenuImg} alt="" className="w-14 h-14" />
              <div className="flex flex-col justify-start items-start gap-1">
                <p className="text-[#E0E6E9] text-[14px] font-[500]">
                  Spicy seasoned seafood noodles
                </p>
                <span className="text-[#ABBBC2] text-[12px] font-[400]">
                  200 dishes ordered
                </span>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4 w-full">
              <img src={MenuImg} alt="" className="w-14 h-14" />
              <div className="flex flex-col justify-start items-start gap-1">
                <p className="text-[#E0E6E9] text-[14px] font-[500]">
                  Spicy seasoned seafood noodles
                </p>
                <span className="text-[#ABBBC2] text-[12px] font-[400]">
                  200 dishes ordered
                </span>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4 w-full">
              <img src={MenuImg} alt="" className="w-14 h-14" />
              <div className="flex flex-col justify-start items-start gap-1">
                <p className="text-[#E0E6E9] text-[14px] font-[500]">
                  Spicy seasoned seafood noodles
                </p>
                <span className="text-[#ABBBC2] text-[12px] font-[400]">
                  200 dishes ordered
                </span>
              </div>
            </div>
          </div>
          <button className="w-full !p-3.5 text-[#EA7C69] bg-transparent border border-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]">
            View All
          </button>
        </div>
        <div className="w-full h-[45%] bg-[#1F1D2B] rounded-lg">
          <div className="w-full flex justify-between items-center !p-6">
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
          <div className="w-full h-[1px] bg-[#393C49]"></div>
          <div className="">
            <div className=""></div>
            <div className="">
              <div className="">
                <div className="">
                  <p></p>
                  <span></span>
                </div>
              </div>
              <div className="">
                <div className="">
                  <p></p>
                  <span></span>
                </div>
              </div>
              <div className="">
                <div className="">
                  <p></p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
