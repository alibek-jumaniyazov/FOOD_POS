import React from "react";

export default function Chart({ countTypes }) {
  const data = [
    { value: countTypes["Dine In"] || 0.001, color: "#FF7CA3", radius: 60 },
    { value: countTypes["To Go"] || 0.001, color: "#FFB572", radius: 75 },
    { value: countTypes["Delivery"] || 0.001, color: "#65B0F6", radius: 90 },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  const center = 100;

  if (total === 0) return <p className="text-white">No orders available</p>;

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="rotate-[-90deg]"
    >
      {data.map((item, index) => {
        const circumference = 2 * Math.PI * item.radius; // Umumiy doira uzunligi
        const offset = circumference * (1 - item.value / total); // Segmentni boshlash joyi

        return (
          <circle
            key={index}
            cx={center}
            cy={center}
            r={item.radius}
            stroke={item.color}
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
