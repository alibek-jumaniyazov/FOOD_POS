import React, { Suspense, useState } from "react";
import { categoryMenu } from "../../constants/home/category";
import { NavLink, Route, Routes } from "react-router-dom";
import { OrderRoute } from "../../routes/OrderRoutes";
import { Select } from "antd";
import Product from "../../components/home/menu/Product";
import ProductCard from "../../components/home/menu/ProductCard";
import ProductsPayment from "../../components/home/payment/ProductsPayment";
import ProductCardPayment from "../../components/home/menu/ProductCardPayment";
import { useApi } from "../../context/ApiContext";
import { Icons } from "../../assets";

export default function Home() {
  const { products, cart, postOrders } = useApi();
  const [search, setSearch] = useState("");
  const [diningOption, setDiningOption] = useState("Dine In");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const confirmOrder = (cart, tableNumber, totalPrice) => {
    const ordersForm = {
      customer: {
        name: "Alibek Jumaniyazov",
        email: "lokaydo@example.com",
      },
      products: cart.items,
      paymentMethod: paymentMethod,
      diningOption: diningOption,
      totalPrice: totalPrice,
      tableNumber: tableNumber,
    };
    postOrders(ordersForm);
    console.log(ordersForm);
  };

  const [productsPayment, setProductsPayment] = useState(false);
  const [bgBlack, setbgBlack] = useState(false);
  const [currentDate, setCurrentDate] = useState(getDate());

  function getDate() {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  const handleChangeSelect = (value) => {
    console.log(value);
  };

  const handleSearchProducts = (e) => {
    setSearch(e);
  };

  return (
    <div className="Home flex justify-between items-start w-full h-full ">
      <div className="flex flex-col gap-10 !p-6 w-[80%]">
        <div className="oneBlock flex justify-between items-center">
          <div>
            <h1 className="text-[28px] font-[600]">Jaegar Resto</h1>
            <p className="text-[16px] text-[#E0E6E9] font-[400]">
              {currentDate}
            </p>
          </div>
          <div className="flex justify-start items-center gap-2 bg-[#2D303E] rounded-[8px] w-[250px]  !p-[14px] border-[1px] border-[#393C49]">
            <Icons.Search />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearchProducts(e.target.value)}
              placeholder="Search for food, coffe, etc.."
              className="!outline-none w-full bg-transparent text-white"
            />
          </div>
        </div>
        {!search && (
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
        )}
        <div className="threeBlock flex flex-col gap-15 w-full">
          <div className="w-full flex justify-between items-center">
            {!search ? (
              <h1 className="text-[20px] font-[600] text-white">
                Choose Dishes
              </h1>
            ) : (
              <h1 className="text-[20px] font-[600] text-white">
                All Products
              </h1>
            )}
            <Select
              defaultValue="Dine-In"
              // value={diningOption}
              style={{ width: 100 }}
              onChange={handleChangeSelect}
              options={[
                { value: "Dine-In", label: "Dine In" },
                { value: "To-Go", label: "To Go" },
                { value: "Delivery", label: "Delivery" },
              ]}
            />
          </div>
          {!search ? (
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
          ) : (
            <div className="AllProducts flex flex-wrap gap-y-[90px] gap-x-7 justify-start items-start h-[620px] overflow-y-auto overflow-x-hidden !pt-[70px]">
              {products
                .filter((order) =>
                  order.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((order) => (
                  <Product key={order.id} order={order} />
                ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={
          bgBlack
            ? `absolute bg-[#000000B2] w-full h-full z-40 left-0 top-0`
            : `!hidden`
        }
      ></div>
      <div
        className={
          productsPayment
            ? "absolute right-0 top-0 z-50 flex justify-end items-center gap-0 w-full"
            : ` hidden`
        }
      >
        <ProductCardPayment
          setProductsPayment={setProductsPayment}
          setbgBlack={setbgBlack}
        />
        {productsPayment ? (
          <ProductsPayment
            setProductsPayment={setProductsPayment}
            setbgBlack={setbgBlack}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            diningOption={diningOption}
            setDiningOption={setDiningOption}
            confirmOrder={confirmOrder}
          />
        ) : null}
      </div>
      <ProductCard
        productsPayment={productsPayment}
        setProductsPayment={setProductsPayment}
        setbgBlack={setbgBlack}
        diningOption={diningOption}
        setDiningOption={setDiningOption}
      />
    </div>
  );
}
