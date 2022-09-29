import React from "react";
import { Link, Router } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import GoogleButton from "react-google-button";
import login from "../../images/login.svg"

const SignIn = () => {
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
    <div className="h-[calc(100vh-70px)]" >
      <Particles
        id="tsparticles"
        url="/snow.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className="h-[calc(100vh-70px)] bg-[#031410] flex items-center justify-evenly ">
      <div className="w-full   hidden md:flex items-center justify-center p-10">
          <img src={login} alt="" className="h-full w-96 " />
        </div>
        <div className="flex justify-center md:justify-start h-full items-center w-full">
          <GoogleButton />
        </div>
      </div>
       
    </div>
  );
};

export default SignIn;
