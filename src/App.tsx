import { useState } from "react";
import "./App.css";
import logo from "./assets/img/logo.svg";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  return (
    <>
      <div className="header">
        <nav className="flex justify-between lg:w-[60%] mx-auto px-6 py-7 relative z-10">
          <img src={logo} alt="Netflix Logo" className="w-24" />
          <div>
            <button className="bg-primary px-3 py-1 rounded-md font-semibold">
              Sign In
            </button>
          </div>
        </nav>
        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
        <div className="hero-section flex flex-col relative justify-center">
          <div className="font-[900] text-[32px] lg:text-[48px]">
            Unlimited movies, TV shows, and more
          </div>
          <div className="font-[400] text-[18px] lg:text-[24px]">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="font-[400] text-[18px] lg:text-[20px] mt-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div>
            <input type="text" />
            <div>
              <button>Get Started</button>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
      <div className="seperator py-2"></div>
    </>
  );
}

export default App;
