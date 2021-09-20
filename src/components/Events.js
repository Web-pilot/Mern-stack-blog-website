import React from "react";

import image from "../images/gallery-3.jpg";

const Events = () => {
  return (
    <article className="section">
      <h4 className="title">EVENTS</h4>
      <span className="underline"></span>
      <div className="slider">
        <input type="radio" name="radio-btn" id="radio1" checked />
        <input type="radio" name="radio-btn" id="radio2" />

        <div className="navigation-auto">
          <div className="auto-btn check1"></div>
          <div className="check2 auto-btn"></div>
        </div>

        <div className="slide first">
          <img src={image} alt="" />
          <a href="@">
            <article className="event-information">
              <h1>Global Crusade</h1>
              <h5>Sempt. 23, 2021</h5>
            </article>
          </a>
        </div>
        <div className="slide">
          <img src={image} alt="" />
          <article className="event-information">
            <h1>Feast of Assumption</h1>
          </article>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
        </div>
      </div>
    </article>
  );
};

export default Events;
