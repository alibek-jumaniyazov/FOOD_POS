import React from "react";
import PersonOrder from "../../assets/images/PersonOrder.png";
export default function UserOrder({ order }) {
  return (
    <div className="flex justify-between items-center w-full cursor-pointer">
      <div className="flex justify-start items-center gap-4">
        <div
          className={`w-[32px] h-[32px] ${
            order.status === "Pending" && "bg-[#FFB57233]"
          } ${order.status === "Preparing" && "bg-[#9290FE33]"} ${
            order.status === "Completed" && "bg-[#6BE2BE3D]"
          } rounded-full flex justify-center items-center`}
        >
          {order.customer.image ? (
            <img src={order.customer.image} alt="" className=" " />
          ) : (
            <p className="text-[#E0E6E9] text-[14px] font-[400]">
              {order.customer.name.charAt(0)}
            </p>
          )}
        </div>
        <p className="text-[#E0E6E9] text-[14px] font-[400] ellipsis-text">
          {order.customer.name}
        </p>
      </div>
      <p className="w-[137px] text-start text-[#E0E6E9] text-[14px] font-[400] ellipsis-menu">
        {order.products.map((item) => item.title)}
      </p>
      <span className="text-start text-[#E0E6E9] text-[14px] font-[400]">
        {order.totalPrice}
      </span>
      <div
        className={`${order.status === "Pending" && "bg-[#FFB57233]"} ${
          order.status === "Preparing" && "bg-[#9290FE33]"
        } ${
          order.status === "Completed" && "bg-[#6BE2BE3D]"
        } w-[90px] h-[26px] rounded-[30px] flex justify-center items-center`}
      >
        <span
          className={` ${order.status === "Pending" && "text-[#FFB572]"} ${
            order.status === "Preparing" && "text-[#9290FE]"
          } ${
            order.status === "Completed" && "text-[#50d1aa]"
          } text-[14px] font-[400]`}
        >
          {order.status}
        </span>
      </div>
    </div>
  );
}
