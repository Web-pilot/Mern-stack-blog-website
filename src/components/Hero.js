import React from "react";

import image from "../images/category-2.jpg";
const Hero = () => {
  return (
    <main className="section main-hero">
      <div className="hero-img">
        <img src={image} alt="st.john" />
        <div className="hero-info">
          <h1 className="hero-title">ST.JOHN</h1>
          <p>
            veniam accusantium laudantium, repudiandae vel reprehenderit
            provident corrupti repellat aliquam ipsum aliquid earum est aperiam
            autem perferendis?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
