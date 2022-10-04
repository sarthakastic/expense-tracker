import React from "react";
import { signInWithGoogle } from "../../firebase/Firebase";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { async } from "@firebase/util";
import ProfilePic from "../../images/profile.svg";

const Join = () => {
  const { user } = UserAuth();

  const handleUser = () => {};

  return (
    <div className="flex items-center w-full gap-2">
      <div>
        {user ? (
          <div onClick={handleUser()} className="">
            {
              <img
                className="border rounded-full h-[5vh] w-full "
                src={user.photoURL}
              ></img>
            }
          </div>
        ) : (
          <Link to="/join">
            {" "}
            <div
              className="border-[2.5px]  
          border-blue-200
          font-semibold
          text-blue-200 
          px-4 
          w-28
          text-base 
          flex
          justify-center 
          rounded-lg
          cursor-pointer
          hover:bg-blue-200
          hover:text-[#031416]
          "
            >
              {" "}
              Join Now
            </div>
          </Link>
        )}
      </div>
      {/* <button className=" text-xs w-[52px] text-white " onClick={handleSignOut}>Sign Out {console.log(user)} </button> */}
    </div>
  );
};

export default Join;
