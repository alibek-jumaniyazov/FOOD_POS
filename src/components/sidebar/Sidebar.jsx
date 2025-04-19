import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../constants/sidebar/sidebarItems";
import { Icons } from "../../assets/Icons";

const Sidebar = () => {
    const pathname = window.location.pathname;
  return (
    <div className="h-screen w-[104px] bg-[#1F1D2B] flex flex-col items-center !p-6 gap-10">
      <div className="bg-[#543c3c] !p-3 rounded-2xl">
        <Icons.logo className="w-10 h-10" />
      </div>
      <div className="flex flex-col gap-6 mt-4 ">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `!p-6 rounded-lg flex items-center justify-center transition ${
                isActive
                  ? "bg-[#EA7C69] text-white shadow-[0px_8px_24px_0px_#EA7C6952] "
                  : "text-white hover:bg-lightDark"
              }`
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
