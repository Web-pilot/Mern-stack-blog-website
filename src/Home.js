import React from "react";

import Activities from "./components/Activities";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Sermon from "./components/Sermon";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Sermon />
    </>
  );
};

export default Home;
