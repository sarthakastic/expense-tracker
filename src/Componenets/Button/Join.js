import React from "react";
import {signInWithGoogle} from "../../firebase/Firebase"
import {Link } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext";
import { async } from "@firebase/util";

const Join = () => {


  const {user, logOut}= UserAuth();
  const handleSignOut =  ()=>{
    try{
      
        logOut()
    }
    catch(error){console.log(error)}
  }

  return (
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
      {
        user?.displayName?(<button onClick={handleSignOut}>Sign Out  {console.log(user)} </button>):
      
      <Link to='/join'>

      Join Now
      </Link>}
     
    </div>
  );
};

export default Join
