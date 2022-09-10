import React from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import LandingImage from "../../images/expense.svg";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Landing = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className="h-[calc(100vh-70px)] bg-[#031410] flex items-center">
      <Particles
        id="tsparticles"
        url="/snow.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
        <div className="md:w-[50vw] align-middle ">
          <div className="text-[32px] md:text-[62px] p-4 text-white font-bold">
            Your Destination to
          </div>

          <div className="p-4 flex justify-center items-center input-cursor">
            <div className="text-blue-200 font-extrabold text-[36px] md:text-[72px]">
              <Typewriter
                options={{
                  loop: true,
                  strings: [
                    "Track your Expense",
                    "Set monthly budget",
                    "Manage Your Savings",
                  ],
                  autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .pauseFor(500)
                    .deleteAll()

                    .start();
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-[50vw] h-full  hidden md:flex items-center justify-center">
          <img src={LandingImage} alt="" className="h-96 w-96 p-10" />
        </div>
    </div>
  );
};

export default Landing;
