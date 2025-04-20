import React from "react";
import OrderProduct from "../../assets/images/MenuImg.png";
import { Icons } from "../../assets/Icons";

export default function ProductCard() {
  return (
    <div className="w-[40%] h-screen flex flex-col justify-between items-center bg-[#1F1D2B] rounded-tl-lg rounded-bl-lg !p-8">
      <div className="w-full flex flex-col justify-center items-center gap-10 ">
        <div className="w-full flex flex-col justify-center items-start gap-6 border-b border-[#393c49] !pb-6">
          <h1 className="text-[20px] font-[600] text-white">Orders #34562</h1>
          <div className="flex justify-start items-center gap-2">
            <button className="rounded-lg cursor-pointer w-[66px] bg-[#EA7C69] text-white !p-[7px] text-[14px] font-[600] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%] ">Dine In</button>
            <button className="rounded-lg cursor-pointer w-[66px] bg-transparent border border-[#393c49] !p-[7px] text-[#EA7C69] text-[14px] font-[600] hover:text-white hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%] ">To Go</button>
            <button className="rounded-lg cursor-pointer w-[66px] bg-transparent border border-[#393c49] !p-[7px] text-[#EA7C69] text-[14px] font-[600] hover:text-white hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%] ">Delivery</button>
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
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <img src={OrderProduct} alt="" className="w-11 h-11"/>
                        <div className="">
                            <p>Spicy seasoned sea...</p>
                            <span>$ 2.29</span>
                        </div>
                    </div>
                    <div className="">
                        <input type="text" defaultValue={1} className="w-12 h-12 text-center bg-[#2D303E] border border-[#393C49] rounded-[8px] text-white outline-hidden"/>
                        <p>$ 4,58</p>
                    </div>
                </div>
                <div className="">
                    <input type="text" />
                    <button className="cursor-pointer text-[#EA7C69] hover:text-white transition-all duration-300 active:scale-[80%]">
                        <Icons.delete className="w-5 h-5 "/>
                    </button>
                </div>
            </div>
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
        <div className="w-full flex justify-center items-center">
          <button className="w-full !p-3.5 text-white bg-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
