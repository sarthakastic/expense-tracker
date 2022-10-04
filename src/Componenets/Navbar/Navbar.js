import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Join from "../Button/Join";
import ChangeTheme from "../theme/ChangeTheme";
import { UserAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const user =UserAuth()
  return (
    
    <div className="h-[70px] bg-[#031416] w-[100%] flex  items-center ">
      {user.user===null?
      <div className="flex items-center mx-2  w-full gap-2">
        <Link to="/">

        <img src={logo} alt="logo" className="h-10 " />
        </Link>
        <p className="hidden md:flex w-full text-blue-200 text-xl font-extrabold">
          <Link to="/">

          Expense Tracker
          </Link>
        </p>
      </div>:
      <div className="flex items-center mx-2  w-full gap-2">
      <Link to="/account">

      <img src={logo} alt="logo" className="h-10 " />
      </Link>
      <p className="hidden md:flex w-full text-blue-200 text-xl font-extrabold">
        <Link to="/account">

        Expense Tracker
        </Link>
      </p>
    </div>}
      

      <div className="flex gap-2">
        <div className="mx-4 w-full">
          
          <Join />
          
        </div>
        
      </div>
    </div>
    
  );
};

export default Navbar;
