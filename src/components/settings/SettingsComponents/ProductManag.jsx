import React, { Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { categoryMenu } from "../../../constants/home/category";
import { ProductsManagRoute } from "../../../routes/ProductsManagRoutes";
import { Icons } from "../../../assets";

export default function ProductManag() {
  return (
    <div className="ProductManag w-full h-full flex flex-col justify-between items-start">
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex justify-between items-center !p-6">
            <h1 className="text-white text-[20px] font-[600]">
              Products Management
            </h1>
            <button className="cursor-pointer !p-4 border border-[#393C49] gap-2 rounded-[8px] flex justify-center items-center  transition-all duration-300 active:scale-[80%] bg-transparent text-white text-[14px] font-[500]  hover:text-white hover:!border-[#EA7C69]">
              <Icons.filter /> Manage Categories
            </button>
          </div>
          <div className="w-full relative !px-6 !py-0">
            <div className="flex w-full gap-8 justify-start items-center">
              {categoryMenu.map((item) => (
                <NavLink
                  key={item.id}
                  to={`/settings/products-management/${item.path}`}
                  className={({ isActive }) =>
                    `transition duration-300 font-[600] text-[16px] !pb-3 z-20 ${
                      isActive
                        ? "text-[#EA7C69] border-b-2 rounded-[2px] !pb-[10px]"
                        : "text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <span className="absolute left-0 bottom-[0.5px] bg-[#393c49] rounded-[1px] w-full h-[1px] z-10"></span>
          </div>
        </div>
        <div className="!p-6">
          <Routes>
            {ProductsManagRoute.map(({ id, path, element, fallback }) => (
              <Route
                index
                key={id}
                path={path}
                element={<Suspense fallback={fallback}>{element}</Suspense>}
              />
            ))}
          </Routes>
        </div>
      </div>
      <div className="relative changesBtns w-full flex justify-start items-center !p-6 gap-2">
        <span className="absolute left-0 -top-5 bg-[#393c49] rounded-[1px] w-full h-[1px] z-10"></span>
        <div className="!w-[172px] !h-[48px] flex justify-center items-center !p-3.5 text-[#EA7C69] bg-transparent border border-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]">
          Discard Changes
        </div>
        <div className="!w-[172px] !h-[48px] flex justify-center items-center !p-3.5 text-white bg-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] shadow-[0px_8px_24px_0px_#EA7C6966] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]">
          Save Changes
        </div>
      </div>
    </div>
  );
}
