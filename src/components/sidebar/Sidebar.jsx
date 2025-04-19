import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../constants/sidebar/sidebarItems";
import { Icons } from "../../assets/icons";
import React from "react";

const Sidebar = () => {
  function handleLogout() {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  }

  return (
    <div className="h-screen w-[104px] bg-[#1F1D2B] !p-6 flex flex-col justify-between items-center rounded-2xl">
      <div className="flex flex-col items-center gap-10">
        <NavLink to="/">
          <div className="bg-[#543c3c] !p-3 rounded-lg">
            <Icons.logo className="w-10 h-10" />
          </div>
        </NavLink>
        <div className="flex flex-col gap-6 mt-4 ">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `!p-6 rounded-lg flex items-center justify-center transition duration-500 hover:bg-[#ea7c692c] hover:text-white   ${
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
