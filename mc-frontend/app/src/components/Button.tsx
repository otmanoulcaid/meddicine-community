import React from "react";

interface ButtonProps {
  value?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = () => {
  return (
    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#1288b3] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#1288b3] transition duration-300 ease-in-out">
      <span className="font-medium text-[#333] group-hover:text-white">
        Login
      </span>
    </button>
  );
};

export default Button;
