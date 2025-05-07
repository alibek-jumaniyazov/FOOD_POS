import React, { useState } from "react";
import { Select } from "antd";
import { useApi } from "../../../context/ApiContext";
import { Icons } from "../../../assets";

export default function ProductsPayment({
  setProductsPayment,
  setbgBlack,
  paymentMethod,
  setPaymentMethod,
  diningOption,
  setDiningOption,
  confirmOrder,
}) {
  const { cart } = useApi();
  const [cardNumber, setCardNumber] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const formatCardNumber = (value) => {
    const rawValue = value.replace(/\D/g, "").slice(0, 16);
    const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
    return formattedValue;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };
  const [expirationDate, setExpirationDate] = useState("");

  const handleExpirationChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpirationDate(value);
  };

  const handleChangeSelect = (value) => {
    setDiningOption(value);
  };

  function backPayment() {
    setProductsPayment(false);
    setbgBlack(false);
  }

  return (
    <div className="!w-[460px] h-screen flex flex-col justify-between items-center bg-[#1F1D2B] border-l border-[#393c49] !p-8">
      <div className="w-full flex flex-col justify-center items-center gap-6 !pt-11">
        <div className="w-full flex justify-between items-center border-b border-[#393c49] !pb-6">
          <div className=" flex flex-col justify-center items-start ">
            <h1 className="text-[28px] font-[600] text-white">Payment</h1>
            <p className="text-[16px] font-[500] text-[#889898]">
              3 payment method available
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <h1 className="text-[20px] font-[600] text-white">Payment Method</h1>
          <div className="w-full flex justify-start items-center gap-2">
            <div
              onClick={() => setPaymentMethod("credit")}
              className={`relative flex flex-col justify-center items-center w-[101px] h-[64px] rounded-lg border cursor-pointer transition-all duration-300 active:scale-[80%]
      ${
        paymentMethod === "credit"
          ? "bg-[#252836] border-[#ABBBC2]"
          : "border-[#393C49]"
      }
      hover:bg-[#ea7c698e]`}
            >
              {paymentMethod === "credit" && (
                <Icons.paymentCheck className="absolute top-1.5 right-1.5" />
              )}
              <Icons.payCard
                className={
                  paymentMethod === "credit" ? "!fill-white" : "!fill-[#ABBBC2]"
                }
              />
              <p
                className={`text-[14px] font-[600] ${
                  paymentMethod === "credit" ? "text-white" : "text-[#ABBBC2]"
                }`}
              >
                Credit Card
              </p>
            </div>

            <div
              onClick={() => setPaymentMethod("paypal")}
              className={`relative flex flex-col justify-center items-center w-[101px] h-[64px] rounded-lg border cursor-pointer transition-all duration-300 active:scale-[80%]
      ${
        paymentMethod === "paypal"
          ? "bg-[#252836] border-[#ABBBC2]"
          : "border-[#393C49]"
      }
      hover:bg-[#ea7c698e]`}
            >
              {paymentMethod === "paypal" && (
                <Icons.paymentCheck className="absolute top-1.5 right-1.5" />
              )}
              <Icons.paypal
                className={`!stroke-[${
                  paymentMethod === "paypal" ? "#ABBBC2" : "#ABBBC2"
                }]`}
              />
              <p
                className={`text-[14px] font-[600] ${
                  paymentMethod === "paypal" ? "text-white" : "text-[#ABBBC2]"
                }`}
              >
                Paypal
              </p>
            </div>

            <div
              onClick={() => setPaymentMethod("cash")}
              className={`relative flex flex-col justify-center items-center w-[101px] h-[64px] rounded-lg border cursor-pointer transition-all duration-300 active:scale-[80%]
      ${
        paymentMethod === "cash"
          ? "bg-[#252836] border-[#ABBBC2]"
          : "border-[#393C49]"
      }
      hover:bg-[#ea7c698e]`}
            >
              {paymentMethod === "cash" && (
                <Icons.paymentCheck className="absolute top-1.5 right-1.5" />
              )}
              <Icons.wallet
                className={
                  paymentMethod === "cash" ? "!fill-white" : "!fill-[#ABBBC2]"
                }
              />
              <p
                className={`text-[14px] font-[600] ${
                  paymentMethod === "cash" ? "text-white" : "text-[#ABBBC2]"
                }`}
              >
                Cash
              </p>
            </div>
          </div>

          {paymentMethod === "credit" ? (
            <div className="flex flex-col gap-4 w-full border-b border-[#393c49] !pb-4">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[500] text-white">
                  Cardholder Name
                </p>
                <input
                  type="text"
                  name="cc-name"
                  autoComplete="cc-name"
                  placeholder="Levi Ackerman"
                  className="w-full !p-[14px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[500] text-white">Card Number</p>
                <input
                  type="text"
                  name="cc-number"
                  autoComplete="cc-number"
                  inputMode="numeric"
                  pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
                  placeholder="2564 1421 0897 1244"
                  maxLength={19}
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  className="w-full !p-[14px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
                  required
                />
              </div>
              <div className="flex justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-[500] text-white">
                    Expiration Date
                  </p>
                  <input
                    type="text"
                    name="cc-exp"
                    autoComplete="cc-exp"
                    inputMode="numeric"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={expirationDate}
                    onChange={handleExpirationChange}
                    className="w-full !p-[14px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-[500] text-white">CVV</p>
                  <input
                    type="password"
                    name="cc-csc"
                    autoComplete="cc-csc"
                    inputMode="numeric"
                    pattern="\d{3,4}"
                    maxLength={3}
                    placeholder="CVC"
                    className="w-full !p-[14px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
                    required
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {paymentMethod === "paypal" ? (
            <div className="flex flex-col gap-4 w-full border-b border-[#393c49] !pb-4">
              <h1>PayPal</h1>
            </div>
          ) : (
            ""
          )}

          {paymentMethod === "cash" ? (
            <div className="flex flex-col gap-4 w-full border-b border-[#393c49] !pb-4">
              <h1>Cash</h1>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-[500] text-white">Order Type</p>
              <Select
                defaultValue="Dine In"
                value={diningOption}
                style={{ width: "191px" }}
                className="!h-[54px]"
                onChange={handleChangeSelect}
                options={[
                  { value: "Dine In", label: "Dine In" },
                  { value: "To Go", label: "To Go" },
                  { value: "Delivery", label: "Delivery" },
                ]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-[500] text-white">Table no.</p>
              <input
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                type="number"
                placeholder="140"
                className="w-full !p-[14px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full flex justify-baseline items-center gap-2`}>
        <button
          onClick={() => backPayment()}
          className="w-full !p-3.5 text-[#EA7C69] bg-transparent border border-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]"
        >
          Cancel
        </button>
        <button
          onClick={() => confirmOrder(cart, tableNumber, cart.totalPrice)}
          className="w-full !p-3.5 text-white bg-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] shadow-[0px_8px_24px_0px_#EA7C6966] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
