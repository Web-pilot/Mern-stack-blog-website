import React from "react";

import Activities from "./components/Activities";
import Events from "./components/Events";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Sermon from "./components/Sermon";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Activities />
      <Sermon />
      <Events />
    </>
  );
};

export default Home;
