import { useState } from "react";
import { Icons } from "../../../../assets/icons";
import MenuImg from "../../../../assets/images/MenuImg.png";
import { useApi } from "../../../../context/ApiContext";
import ProductEditModal from "../../../productsManag/ProductEditModal";

export default function ProductManage({ orders }) {
  const { removeProduct } = useApi();
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="relative flex flex-col justify-center items-center !w-[200px] !h-[290px] bg-[#1F1D2B] border border-[#393C49] rounded-lg transition duration-300 ease-in-out">
      <div className="flex flex-col justify-center items-center gap-4 !p-6 ">
        <img src={orders.image} alt="" className="w-[127px] h-[127px]" />
        <h4 className="w-[144px] text-center text-[14px] font-[500] text-white">
          {orders.title}
        </h4>
        <div className="flex justify-center items-center gap-2 !mb-[58px]">
          <p className="text-center text-[14px] font-[400] text-[#ABBBC2]">
            {orders.price}
          </p>
          <span className="w-[1px] h-[1px] border-[2px] border-[#C4C4C4] rounded-[50%]"></span>
          <span className="text-center text-[14px] font-[400] text-[#ABBBC2]">
            {orders.availability} Bowls
          </span>
        </div>
      </div>
      <div
        onClick={() => setIsEditOpen(true)}
        className="editBtn absolute cursor-pointer bottom-0 left-0 w-full flex justify-center items-center gap-2 !p-4 bg-[#50343a] rounded-br-[8px] rounded-bl-[8px] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white transition duration-300 ease-in-out "
      >
        <Icons.edit className="fill-[#EA7C69] editBtn-hover:!fill-amber-50 " />
        <p className=" text-[14px] font-[500]">Edit dish</p>
      </div>
      <div
        onClick={() => removeProduct(orders.category, orders.id)}
        className="absolute top-2.5 right-2.5 cursor-pointer hover:bg-[#50343a] !p-1.5 rounded-lg transition duration-300 ease-in-out "
      >
        <Icons.delete />
      </div>
      <ProductEditModal
        isOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        initialData={orders}
      />
    </div>
  );
}
