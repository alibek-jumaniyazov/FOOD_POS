import ProductCardOrder from "./ProductCardOrder";
import toast, { Toaster } from "react-hot-toast";
import { useApi } from "../../../context/ApiContext";
import { useState } from "react";

export default function ProductCard({
  productsPayment,
  setProductsPayment,
  setbgBlack,
  diningOption,
  setDiningOption,
}) {
  const { cart } = useApi();

  function openPayment() {
    if (cart?.items?.length > 0) {
      setProductsPayment(true);
      setbgBlack(true);
    } else {
      setProductsPayment(false);
      toast.error("Savatda mahsulat yo'q!", {
        style: {
          borderRadius: "8px",
          background: "#1F1D2B",
          color: "#fff",
        },
      });
    }
  }

  console.log(cart);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        className="!bg-black"
      />
      <div className="w-[45%] h-screen flex flex-col justify-between items-center bg-[#1F1D2B] rounded-tl-lg rounded-bl-lg !p-8">
        <div className="w-full flex flex-col justify-center items-center gap-6 ">
          <div className="w-full flex flex-col justify-center items-start gap-6 border-b border-[#393c49] !pb-6">
            <h1 className="text-[20px] font-[600] text-white">Orders #34562</h1>
            <div className="flex justify-start items-center gap-2">
              {["Dine In", "To Go", "Delivery"].map((type) => (
                <button
                  key={type}
                  onClick={() => setDiningOption(type)}
                  className={`rounded-lg cursor-pointer w-[66px] !p-[7px] text-[14px] font-[600] transition-all duration-300 active:scale-[80%] 
                    ${
                      diningOption === type
                        ? "bg-[#EA7C69] text-white hover:bg-[#ea7c698e] "
                        : "bg-transparent border border-[#393c49]  text-[#EA7C69] hover:text-white hover:bg-[#ea7c698e]"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="">
                <p className="text-white font-[600] text-[16px]">Item</p>
              </div>
              <div className="flex justify-end items-center gap-11">
                <p className="text-white font-[600] text-[16px]">Qty</p>
                <p className="text-white font-[600] text-[16px]">Price</p>
              </div>
            </div>
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
              <p className="text-white font-[500] text-[16px]">
                {cart?.discount || "$0.00"}
              </p>
            </div>
            <div className="w-full flex justify-between items-center ">
              <span className="text-[#889898] font-[400] text-[14px]">
                Sub total
              </span>
              <p className="text-white font-[500] text-[16px]">
                {cart?.totalPrice || "$0.00"}
              </p>
            </div>
          </div>
          <div
            className={
              productsPayment
                ? "hidden"
                : `w-full flex justify-center items-center`
            }
          >
            <button
              onClick={() => openPayment()}
              className="w-full !p-3.5 text-white bg-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
