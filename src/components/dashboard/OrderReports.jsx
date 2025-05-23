import { Icons } from "../../assets";
import { useApi } from "../../context/ApiContext";
import UserOrder from "./UserOrder";
export default function OrderReports() {
  const { orders } = useApi();
  console.log(orders);

  return (
    <div className="w-full !h-full bg-[#1F1D2B] rounded-lg">
      <div className="">
        <div className="w-full flex justify-between items-center !p-6">
          <h1 className="text-white text-[20px] font-[600]">Order Report</h1>
          <button className="cursor-pointer !p-4 border border-[#393C49] gap-2 rounded-[8px] flex justify-center items-center  transition-all duration-300 active:scale-[80%] bg-transparent text-white text-[14px] font-[500]  hover:text-white hover:!border-[#EA7C69]">
            <Icons.filter /> Filter Order
          </button>
        </div>
        <div className="flex justify-between items-center w-full gap-6 !px-6 !pb-4 text-white text-[14px] font-[600]">
          <span>Customer</span>
          <span>Menu</span>
          <span>Total Payment</span>
          <span className="!mr-3 -translate-x-[26px]">Status</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#393C49]"></div>
      <div className="w-full h-[460px] flex flex-col justify-start items-start !p-6 gap-6 overflow-y-auto ">
        {orders.map((order) => (
          <UserOrder order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}
