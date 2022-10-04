import React from "react";
import { UserAuth } from "../../Context/AuthContext";

const User = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-20 absolute right-1 bg-[#bedbfe] text-[#031516] cursor-pointer  shadow-lg shadow-[#031516] ">
        <div onClick={() => handleSignOut()} className=" p-2 ">
          Sign Out
        </div>
      </div>
    </>
  );
};

export default User;
