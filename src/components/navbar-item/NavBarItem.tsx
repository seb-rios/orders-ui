import React from "react";

export interface NavBarItemsProps {
  icon: string;
  name: string;
  onClick: () => void;
}

const NavBarItem: React.FC<NavBarItemsProps> = ({ name, icon, onClick }) => {
  return (
    <div
      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <span className="material-icons">{icon}</span>
      <span>{name}</span>
    </div>
  );
};

export default NavBarItem;
