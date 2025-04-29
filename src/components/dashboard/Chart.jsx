import React from "react";

export default function Chart() {
  const data = [
    { value: 250, color: "#FF7CA3", radius: 60 },
    { value: 200, color: "#FFB572", radius: 75 },
    { value: 300, color: "#65B0F6", radius: 90 },
  ];

  const total = 400;
  const center = 100;

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="rotate-[-90deg]"
    >
      {data.map((item, index) => {
        const circumference = 2 * Math.PI * item.radius;
        const offset = circumference * (1 - item.value / total);

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
