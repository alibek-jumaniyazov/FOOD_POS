import { NavLink, useLocation } from "react-router-dom";
import { sidebarItems } from "../../constants/sidebar/sidebarItems";
import { Icons } from "../../assets/icons";
import pettern from "../../assets/images/Pattern.png";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [petternWidth, setPatternWidth] = useState(8);

  // useEffect(() => {
  //   const path = location.pathname;

  //   if (path === "/order") setPatternWidth(8);
  //   else if (path === "/calculation") setPatternWidth(15.4);
  //   else if (path === "/dashboard") setPatternWidth(23);
  //   else if (path === "/messages") setPatternWidth(0);
  //   else if (path === "/notification") setPatternWidth(0);
  //   else if (path === "/settings") setPatternWidth(45.7);
  // }, [location.pathname]);

  function handleLogout() {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  }

  return (
    <div className="h-screen relative w-[104px] bg-[#1F1D2B] !p-6 flex flex-col justify-between items-center rounded-tr-2xl rounded-br-2xl ">
      <div className="flex flex-col items-center gap-10">
        <NavLink to="/">
          <div className="bg-[#543c3c] !p-3 rounded-lg">
            <Icons.logo className="w-10 h-10" />
          </div>
        </NavLink>
        {/* <img
          src={pettern}
          alt=""
          className={`absolute  top-[${petternWidth}vw] right-[-0.5px] z-10`}
        /> */}
        <div className="flex flex-col gap-11 mt-4 z-20">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `w-[56px] h-[56px] rounded-lg flex items-center justify-center transition duration-500 hover:bg-[#ea7c692c] hover:text-white   ${
                  isActive
                    ? "bg-[#EA7C69] text-white shadow-[0px_8px_24px_0px_#EA7C6952] hover:!bg-[#EA7C69] hover:!shadow-[0px_8px_24px_0px_#EA7C6952]"
                    : "text-white hover:bg-lightDark"
                }`
              }
            >
              <div className="group-hover:text-white">
                {item.icon &&
                  React.cloneElement(item.icon, {
                    className: `w-6 h-6 text-[#EA7C69] group-hover:text-white transition duration-500`,
                  })}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div
        className="group cursor-pointer rounded-lg w-[64px] h-[64px] flex items-center justify-center transition duration-500 hover:bg-[#EA7C69] hover:shadow-[0px_8px_24px_0px_#EA7C6952]"
        onClick={handleLogout}
      >
        <Icons.Logout className="w-5 h-5 text-[#EA7C69] group-hover:text-white transition duration-500" />
      </div>
    </div>
  );
};

export default Sidebar;
