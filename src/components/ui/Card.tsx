import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-lg shadow 
        p-4 transition 
        ${onClick ? "cursor-pointer hover:shadow-lg" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
