import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { usePreferences } from "../../hooks/usePreferences";

const Layout: React.FC = () => {
  const { preferences } = usePreferences();

  return (
    <div className="flex">
      <NavBar isCollapsed={preferences.isNavCollapsed} />
      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          preferences.isNavCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
