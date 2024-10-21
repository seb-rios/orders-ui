import React from "react";
import { Link } from "react-router-dom";

export interface NavBarItemsProps {
  icon: string;
  name: string;
  to: string;
  isCollapsed: boolean;
}

const NavBarItem: React.FC<NavBarItemsProps> = ({
  name,
  icon,
  to,
  isCollapsed,
}) => {
  return (
    <Link
      to={to}
      className={`flex ${
        isCollapsed ? "justify-center " : ""
      }items-center space-x-2 p-2 rounded-lg cursor-pointer text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
    >
      <span className="material-icons">{icon}</span>
      {!isCollapsed && <span>{name}</span>}
    </Link>
  );
};

export default NavBarItem;
