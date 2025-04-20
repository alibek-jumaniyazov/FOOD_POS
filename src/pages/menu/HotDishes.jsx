import React from 'react';
import MenuImg from "../../assets/images/MenuImg.png";
import Product from '../../components/menu/Product';

export default function HotDishes() {
  const orders = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    availability: "20 Bowls available",
    image: MenuImg,
  }));

  return (
    <div className='HotDishes flex flex-wrap gap-y-[90px] gap-x-7 justify-start items-start h-[620px] overflow-y-auto overflow-x-hidden !pt-[70px]'>
      {orders.map((order) => (
        <Product key={order.id} order={order} />
      ))}
    </div>
  );
}
