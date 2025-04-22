import MenuImg from "../../../../assets/images/MenuImg.png";

export default function ProductManage({ orders }) {
  return (
    <div
      className="cursor-pointer flex flex-col justify-center items-center gap-4 !p-6 !w-[221px] !h-[299px] bg-[#1F1D2B] border border-[#393C49] rounded-lg transition duration-300 ease-in-out"
    >
      <img src={MenuImg} alt="" className="w-[127px] h-[127px]" />
      <h4 className="w-[144px] text-center text-[14px] font-[500] text-white">
        Spicy seasoned seafood noodles
      </h4>
      <div className="flex justify-center items-center gap-2">
        <p className="text-center text-[14px] font-[400] text-[#ABBBC2]">
          $ 2.29
        </p>
        <span className="w-[1px] h-[1px] border-[2px] border-[#C4C4C4] rounded-[50%]"></span>
        <span className="text-center text-[14px] font-[400] text-[#ABBBC2]">
          20 Bowls
        </span>
      </div>
      <div className="">
        
        <p>Edit dish</p>
      </div>
    </div>
  );
}
