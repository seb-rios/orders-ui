import React from "react";

interface CardProps<T> {
  data: T;
  render: (data: T) => JSX.Element;
  onClick?: () => void;
}

const Card = <T,>({ data, render, onClick }: CardProps<T>) => {
  return (
    <div
      className="card transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {render(data)}
    </div>
  );
};

export default Card;
