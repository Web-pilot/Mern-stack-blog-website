import React from "react";

import SideBar from "./SideBar";
const Hero = () => {
  return (
    <>
      <main className="section main-hero">
        <div className="hero-img">
          <div className="hero-info">
            <h1 className="hero-title">STORY LAND</h1>
            <p>
              You've ever got a story to tell all just want to have some fun
              reading stories, then story land is the right place for you, just
              sign up for an account and get started
            </p>
          </div>
        </div>
      </main>
      <SideBar />
    </>
  );
};

export default Hero;
