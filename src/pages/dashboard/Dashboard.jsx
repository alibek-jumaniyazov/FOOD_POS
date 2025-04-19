import React from "react";
import { Icons } from "../../assets/Icons";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="oneBlock">
        <div className="">
          <h1>Jaegar Resto</h1>
          <p>Tuesday, 2 Feb 2021</p>
        </div>
        <div className="">
          <Icons.Search />
          <input type="text" placeholder="Search for food, coffe, etc.." />
        </div>
      </div>
      <div className="twoBlock"></div>
      <div className="threeBlock">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
