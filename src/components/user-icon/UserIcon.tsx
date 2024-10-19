import React from "react";

interface UserIconProps {
  userName: string;
  onClick?: () => void;
}

const UserIcon: React.FC<UserIconProps> = ({ userName, onClick }) => {
  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  return (
    <div
      className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-xl font-bold rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
      onClick={onClick}
    >
      {getInitials(userName)}
    </div>
  );
};

export default UserIcon;
