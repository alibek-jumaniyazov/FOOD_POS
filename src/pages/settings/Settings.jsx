import React, { Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import SettingsCategory from "../../components/settings/SettingsCategory";
import { settingsCategory } from "../../constants/settings/settingsCategory";
import { SettingsRoute } from "../../routes/SettingsRoutes";

export default function Settings() {
  return (
    <div className="Settings flex flex-col justify-start items-center gap-6 !p-6 w-full h-screen">
      <h1 className="w-full text-start text-white text-[28px] font-[600]">
        Settings
      </h1>
      <div className="w-full h-full flex justify-between items-start gap-6">
        <div className="w-[30%] h-full bg-[#1F1D2B] rounded-lg">
          {settingsCategory.map((item) => (
            <NavLink
              key={item.id}
              to={`/settings/${item.path}`}
              className={({ isActive }) =>
                `SettingCategoryLink flex justify-start items-center gap-4 p-4  font-[500] text-[16px] transition duration-300  ${
                  isActive
                    ? "bg-[#EA7C6942] !text-[#ea7c69] SettingCategoryLink-svg-path:!fill-[#ea7c69] "
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <SettingsCategory item={item} isActive={isActive} />
              )}
            </NavLink>
          ))}
        </div>
        <div className="w-[70%] h-full bg-[#1F1D2B] rounded-lg">
          <Routes>
            {SettingsRoute.map(({ id, path, element, fallback }) => (
              <Route
                index
                key={id}
                path={path}
                element={<Suspense fallback={fallback}>{element}</Suspense>}
              />
            ))}
          </Routes>
        </div>
       
      </div>
    </div>
  );
}
