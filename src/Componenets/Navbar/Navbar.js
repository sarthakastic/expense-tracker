import React from "react";
import logo from "../../images/logo.png";
import Join from "../Button/Join";
import ChangeTheme from "../theme/ChangeTheme";

const Navbar = () => {
  return (
    <div className="h-[70px] bg-[#031416] w-[100%] flex  items-center ">
      <div className="flex items-center mx-2  w-full gap-2">
        <img src={logo} alt="logo" className="h-10 " />
        <p className="hidden md:flex w-full text-blue-200 text-xl font-extrabold">
          Expense Tracker
        </p>
      </div>

      <div className="flex gap-2">
        <div className="mx-4 ">
          <Join />
        </div>
        <div>
          <ChangeTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
