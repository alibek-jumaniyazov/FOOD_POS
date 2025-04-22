import { Input } from "antd";
import React, { useState } from "react";
import { Icons } from "../../../assets/Icons";

export default function ProductCardOrder({ order }) {
  const [productCount, setProductCount] = useState(1);
  const [productInfo, setProductInfo] = useState("");

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;

    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      const numericValue = Number(inputValue);
      if (inputValue === "") {
        setProductCount("");
      } else if (numericValue <= 0) {
        setProductCount("1");
      } else {
        setProductCount(inputValue);
      }
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2.5">
      <div className="w-full flex justify-between items-center gap-2.5">
        <div className="flex justify-start items-center gap-2.5">
          <img src={order.image} alt="" className="w-11 h-11" />
          <div className="">
            <p className="text-white font-[500] text-[14px]">{order.title}</p>
            <span className="text-[#ABBBC2] font-[500] text-[12px]">
              {order.price}
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4">
          <Input
            defaultValue={1}
            onChange={handleChange}
            maxLength={3}
            value={productCount}
            className="!w-12 !h-12 !text-center !bg-[#2D303E] !border !border-[#393C49] !rounded-[8px] text-white !outline-hidden"
          />
          <p className="w-[48px] h-[48px] flex justify-center items-center text-white font-[500] text-[16px]">
            {order.total}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-4">
        <Input
          onChange={(e) => setProductInfo(e.target.value)}
          placeholder="Order Note..."
          value={productInfo}
          className="!w-[87%] !h-12 !text-start !bg-[#2D303E] !border !border-[#393C49] !rounded-[8px] text-white placeholder:!text-[#889898] !outline-hidden"
        />
        <button className="deleteIcon !w-[48px] !h-[48px] flex justify-center items-center cursor-pointer text-[#EA7C69] hover:text-white transition-all duration-300 active:scale-[80%] bg-transparent !border !border-[#EA7C69] !rounded-[8px] hover:!border-[#FF7CA3] hover:!fill-[#FF7CA3]">
          <Icons.delete className="" />
        </button>
      </div>
    </div>
  );
}
