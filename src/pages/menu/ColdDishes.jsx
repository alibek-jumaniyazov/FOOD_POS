import Product from "../../components/home/menu/Product";
import { useApi } from "../../context/ApiContext";

export default function ColdDishes() {
  const { productsCold } = useApi();

  return (
    <div className="ColdDishes flex flex-wrap gap-y-[90px] gap-x-7 justify-start items-start h-[620px] overflow-y-auto overflow-x-hidden !pt-[70px]">
      {productsCold.map((order) => (
        <Product key={order.id} order={order} />
      ))}
    </div>
  );
}
