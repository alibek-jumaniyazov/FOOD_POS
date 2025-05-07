import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { useApi } from "../../../context/ApiContext";
import { Icons } from "../../../assets";

export default function ProductCardOrder({ order }) {
  const { deletCart, updateCart } = useApi();
  const [productCount, setProductCount] = useState(order.count);
  const [productInfo, setProductInfo] = useState(order.note);

  useEffect(() => {
    setProductCount(order.count);
    setProductInfo(order.note);
  }, [order.count, order.note]);

  const handleChange = async (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    const numericValue = Number(inputValue);

    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      if (inputValue === "") {
        setProductCount("");
      } else if (numericValue <= 0) {
        setProductCount("1");
      } else {
        setProductCount(inputValue);
      }
      if (numericValue > 0) {
        updateCart(order.id, numericValue, productInfo);
      }
    }
  };

  const handleSendNote = (value) => {
    setProductInfo(value);
    if (productCount !== " " && productCount !== order.note) {
      updateCart(order.id, productCount, value);
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
              $ {order.unitPrice}
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
          <p className="w-[54px] h-[48px] flex justify-end items-center text-white font-[500] text-[16px]">
            $ {order.totalPrice}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-5">
        <Input
          onChange={(e) => handleSendNote(e.target.value)}
          placeholder="Order Note..."
          value={productInfo}
          className="!w-[87%] !h-12 !text-start !bg-[#2D303E] !border !border-[#393C49] !rounded-[8px] text-white placeholder:!text-[#889898] !outline-hidden"
        />
        <button
          onClick={() => deletCart(order.id)}
          className="deleteIcon !w-[48px] !h-[48px] flex justify-center items-center cursor-pointer text-[#EA7C69] hover:text-white transition-all duration-300 active:scale-[80%] bg-transparent !border !border-[#EA7C69] !rounded-[8px] hover:!border-[#FF7CA3] hover:!fill-[#FF7CA3]"
        >
          <Icons.delete className="" />
        </button>
      </div>
    </div>
  );
}
