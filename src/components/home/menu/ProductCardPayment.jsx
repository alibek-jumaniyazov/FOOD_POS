import { useEffect, useState } from "react";
import { useApi } from "../../../context/ApiContext";
import ProductCardOrder from "./ProductCardOrder";
import { Icons } from "../../../assets";

export default function ProductCardPayment({ setProductsPayment, setbgBlack }) {
  const { cart } = useApi();

  function backPayment() {
    setProductsPayment(false);
    setbgBlack(false);
  }

  useEffect(() => {
    setProductsPayment(false);
    setbgBlack(false);
  }, [cart?.items?.length == 0]);

  return (
    <div className="!w-[460px] h-screen flex flex-col justify-between items-center bg-[#1F1D2B] rounded-tl-lg rounded-bl-lg !p-8">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full flex justify-start items-start">
          <Icons.back
            onClick={() => backPayment()}
            className="cursor-pointer transition-all duration-300 active:scale-[80%]"
          />
        </div>
        <div className="w-full flex justify-between items-center border-b border-[#393c49] !pb-6">
          <div className=" flex flex-col justify-center items-start ">
            <h1 className="text-[28px] font-[600] text-white">Confirmation</h1>
            <p className="text-[16px] font-[500] text-[#889898]">
              Orders #34562
            </p>
          </div>
          <button
            onClick={() => backPayment()}
            className="!w-[48px] !h-[48px] rounded-lg text-center text-white  bg-[#EA7C69] flex justify-center items-center cursor-pointer hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]"
          >
            <Icons.cardPlus />
          </button>
        </div>
        <div className="w-full h-[513px] flex flex-col justify-start items-center gap-6 overflow-y-auto">
          {cart?.items?.map((order) => (
            <ProductCardOrder order={order} key={order.id} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-10 border-t border-[#393c49] !pt-6">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className=" w-full flex justify-between items-center ">
            <span className="text-[#889898] font-[400] text-[14px]">
              Discount
            </span>
            <p className="text-white font-[500] text-[16px]">$0</p>
          </div>
          <div className="w-full flex justify-between items-center ">
            <span className="text-[#889898] font-[400] text-[14px]">
              Sub total
            </span>
            <p className="text-white font-[500] text-[16px]">$ 21,03</p>
          </div>
        </div>
      </div>
    </div>
  );
}
