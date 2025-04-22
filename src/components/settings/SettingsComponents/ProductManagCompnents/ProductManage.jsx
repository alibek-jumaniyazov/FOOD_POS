import { Icons } from "../../../../assets/Icons";
import MenuImg from "../../../../assets/images/MenuImg.png";

export default function ProductManage({ orders }) {

  console.log(orders);
  

  return (
    <div className="relative flex flex-col justify-center items-center !w-[221px] !h-[299px] bg-[#1F1D2B] border border-[#393C49] rounded-lg transition duration-300 ease-in-out">
      <div className="flex flex-col justify-center items-center gap-4 !p-6 ">
        <img src={MenuImg} alt="" className="w-[127px] h-[127px]" />
        <h4 className="w-[144px] text-center text-[14px] font-[500] text-white">
          Spicy seasoned seafood noodles
        </h4>
        <div className="flex justify-center items-center gap-2 !mb-[58px]">
          <p className="text-center text-[14px] font-[400] text-[#ABBBC2]">
            $ 2.29
          </p>
          <span className="w-[1px] h-[1px] border-[2px] border-[#C4C4C4] rounded-[50%]"></span>
          <span className="text-center text-[14px] font-[400] text-[#ABBBC2]">
            20 Bowls
          </span>
        </div>
      </div>
      <div className="editBtn absolute cursor-pointer bottom-0 left-0 w-full flex justify-center items-center gap-2 !p-4 bg-[#50343a] rounded-br-[8px] rounded-bl-[8px] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white transition duration-300 ease-in-out ">
        <Icons.edit className="fill-[#EA7C69] editBtn-hover:!fill-amber-50 "/>
        <p className=" text-[14px] font-[500]">Edit dish</p>
      </div>
    </div>
  );
}
