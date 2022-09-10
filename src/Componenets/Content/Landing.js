import React from "react";
import Typewriter from "typewriter-effect";
import LandingImage from "../../images/expense.svg";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-70px)] bg-[#031410] flex ">
      <div className="md:w-[50vw]  ">
        <span className="text-[62px] p-4 text-white font-bold">
          Your Destination to
        </span>

        <div className="flex justify-center items-center input-cursor">
          <div className="text-blue-200 font-extrabold text-[72px]">
            <Typewriter
            options={{loop: true,strings: ["Track your Expense", "Set monthly budget", "Manage Your Savings"],
            autoStart: true}}
              onInit={(typewriter) => {
                typewriter
                  

                  .pauseFor(500)
                  .deleteAll()

                  .start();
                
              }}
            />
          </div>
          <span className="inline-block w-0.5 h-11 bg-white ml-2"></span>
        </div>
      </div>
      <div className="w-[50vw] h-full  hidden md:flex items-center justify-center">
        <img src={LandingImage} alt="" className="h-96 w-96 p-10" />
      </div>
    </div>
  );
};

export default Landing;
