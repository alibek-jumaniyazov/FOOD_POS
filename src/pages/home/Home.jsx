import React, { Suspense } from "react";
import { Icons } from "../../assets/Icons";
import { categoryMenu } from "../../constants/home/category";
import { NavLink, Route, Routes } from "react-router-dom";
import { OrderRoute } from "../../routes/OrderRoutes";
import { Select } from "antd";
import ProductCard from "../../components/menu/ProductCard";

export default function Home() {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="Home flex justify-between items-start w-full h-full ">
      <div className="flex flex-col gap-10 !p-6 w-[80%]">
        <div className="oneBlock flex justify-between items-center">
          <div>
            <h1 className="text-[28px] font-[600]">Jaegar Resto</h1>
            <p className="text-[16px] text-[#E0E6E9] font-[400]">
              Tuesday, 2 Feb 2021
            </p>
          </div>
          <div className="flex justify-start items-center gap-2 bg-[#2D303E] rounded-[8px] w-[250px]  !p-[14px] border-[1px] border-[#393C49]">
            <Icons.Search />
            <input
              type="text"
              placeholder="Search for food, coffe, etc.."
              className="!outline-none w-full bg-transparent text-white"
            />
          </div>
        </div>

        <div className="twoBlock">
          <div className="relative flex w-full gap-8 justify-start items-center">
            {categoryMenu.map((item) => (
              <NavLink
                key={item.id}
                to={`/order/${item.path}`}
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
            <span className="absolute left-0 bottom-[0.5px] bg-[#393c49] rounded-[1px] w-full h-[1px] z-10"></span>
          </div>
        </div>
        <div className="threeBlock flex flex-col gap-15 w-full">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[20px] font-[600] text-white">Choose Dishes</h1>
            <Select
              defaultValue="Dine In"
              style={{ width: 100 }}
              onChange={handleChange}
              options={[
                { value: "Dine In", label: "Dine In" },
                { value: "Take Away", label: "Take Away" },
                { value: "Delivery", label: "Delivery" },
                { value: "Catering", label: "Catering" },
              ]}
            />
          </div>
          <Routes>
            {OrderRoute.map(({ id, path, element, fallback }) => (
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
      <ProductCard />
    </div>
  );
}
