import React from "react";

const Button = ({
  children,
  color,
  Icon,
}: {
  children: React.ReactNode;
  color: string;
  Icon: React.FC;
}) => {
  return (
    <button
      style={{ color: color }}
      className="px-4 py-2 rounded-md border-2 border-white border-opacity-15 text-white flex gap-2 items-center justify-center font-bold hover:-translate-y-2 ease-in-out duration-300 transition-all"
    >
      <Icon />
      {children}
    </button>
  );
};

export default Button;
