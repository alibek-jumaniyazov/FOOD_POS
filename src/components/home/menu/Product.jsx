import { useApi } from "../../../context/ApiContext";

export default function xProduct({ order }) {
  const { postCrat } = useApi();

  return (
    <div
      onClick={() => postCrat({ productId: order.id, count: 1 })}
      key={order.id}
      className="cursor-pointer flex flex-col justify-center items-center gap-4 !p-6 w-[192px] h-[226px] bg-[#1F1D2B] rounded-[16px] hover:transform-gpu hover:scale-[1.02] transition duration-300 ease-in-out"
    >
      <img
        src={order.image}
        alt=""
        className="w-[132px] h-[132px] !mt-[-100px]"
      />
      <h4 className="text-center text-[14px] font-[500] text-white">
        {order.title}
      </h4>
      <p className="text-center text-[14px] font-[400] text-white">
        {order.price}
      </p>
      <span className="text-center text-[14px] font-[400] text-[#abbbc2]">
        {order.availability}
      </span>
    </div>
  );
}
