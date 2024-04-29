import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      className={`px-[50px] py-[18px] text-[20px] font-semibold bg-secondaryColor text-black rounded-full ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
