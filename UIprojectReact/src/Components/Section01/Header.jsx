import React from "react";

const Header = () => {
  return (
    <div className=" flex items-center justify-between w-full h-sm px-16 py-10">
      <div className="bg-black flex items-center justify-center w-40 h-8 rounded-full text-white text-center font-semibold">
        TARGET AUDIENCE
      </div>
      <div className="bg-gray-300 border-none rounded-full flex items-center justify-center w-52 h-8 text-white text-center font-semibold ">
        Digital Banking Platform
      </div>
    </div>
  );
};

export default Header;
