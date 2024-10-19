import React from "react";
import UserIcon from "../user-icon/UserIcon";
import { items } from "../../constants/navItems";
import NavBarItem from "../navbar-item/NavBarItem";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col items-center justify-between">
      <div className="flex items-center justify-center mb-6">
        <UserIcon userName="John Doe" />
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <NavBarItem
            key={index}
            name={item.name}
            icon={item.icon}
            onClick={item.onClick}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <NavBarItem
          name="Configuración"
          icon="settings"
          onClick={() => console.log("hello")}
        />
      </div>
    </div>
  );
};

export default NavBar;
