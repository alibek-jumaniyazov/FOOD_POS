import React from 'react'
import MenuImg from "../../assets/images/MenuImg.png"

export default function HotDishes() {
  return (
    <div className='HotDishes flex flex-col flex-wrap justify-center items-start gap-7'>
        <div className="cursor-pointer flex flex-col justify-center items-center gap-4 !p-6 w-[192px] h-[226px] bg-[#1F1D2B] rounded-[16px]">
            <img src={MenuImg} alt="" className='w-[132px] h-[132px] !mt-[-100px]'/>
            <h4 className='text-center text-[14px] font-[500] text-white'>Spicy seasoned seafood noodles</h4>
            <p className='text-center text-[14px] font-[400] text-white'>$ 2.29</p>
            <span className='text-center text-[14px] font-[400] text-[#abbbc2]'>20 Bowls available</span>
        </div>
    </div>
  )
}
