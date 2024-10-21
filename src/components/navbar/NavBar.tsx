import React from "react";
import UserIcon from "../user-icon/UserIcon";
import { items } from "../../constants/navItems";
import NavBarItem from "../navbar-item/NavBarItem";
import { usePreferences } from "../../hooks/usePreferences";

interface NavBarProps {
  isCollapsed: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isCollapsed }) => {
  const { setNavCollapse } = usePreferences();

  const handleLogout = () => {
    console.log("Logging out!");
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full ${
        isCollapsed ? "w-20" : "w-64"
      } bg-white dark:bg-gray-900 shadow-lg flex flex-col justify-between transition-all duration-300`}
    >
      <div className="p-4 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2
            className={`text-2xl text-gray-900 dark:text-white font-semibold transition-opacity duration-300 ${
              isCollapsed ? "opacity-0 w-0" : "opacity-100"
            }`}
          >
            Grupo Sejim
          </h2>
          <button
            onClick={() => setNavCollapse(!isCollapsed)}
            className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            <span className="material-icons text-gray-500 dark:text-gray-400">
              {isCollapsed ? "chevron_right" : "chevron_left"}
            </span>
          </button>
        </div>

        <div
          className={`relative transition-all duration-300 ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <span className="material-icons absolute left-3 top-2 text-gray-400">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <NavBarItem
              key={index}
              name={item.name}
              icon={item.icon}
              to={item.to}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </div>

      {/* Footer section */}
      <div className="p-4 flex flex-col gap-4">
        <NavBarItem
          name="Configuración"
          icon="settings"
          to="config"
          isCollapsed={isCollapsed}
        />
        <div
          className={`flex ${
            isCollapsed ? "flex-col justify-center gap-2 " : "justify-between "
          }items-center `}
        >
          <div
            className={`flex justify-center items-center ${
              isCollapsed ? "" : "gap-2"
            }`}
          >
            <UserIcon userName="Sofia Segura" />
            <div
              className={`flex flex-col transition-opacity duration-300 ${
                isCollapsed ? "opacity-0 w-0" : "opacity-100"
              }`}
            >
              {!isCollapsed && (
                <span className="text-gray-900 dark:text-white font-semibold">
                  Sofia Segura
                </span>
              )}
              {!isCollapsed && (
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Administradora
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            <span className="material-icons text-gray-500 dark:text-gray-400">
              logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
