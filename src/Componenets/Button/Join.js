import React from "react";
import {signInWithGoogle} from "../../firebase/Firebase"
import {Link } from "react-router-dom"

const Join = () => {
  return (
    <Link to='/join'>
    <div
    // onClick={signInWithGoogle}
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

      Join Now
    </div>
      </Link>
  );
};

export default Join;
