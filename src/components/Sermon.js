import React from "react";

import image from "../images/category-2.jpg";
import { FaBook } from "react-icons/fa";

const Sermon = () => {
  return (
    <section className="section">
      <h4 className="title">SERMON</h4>
      <span className="underline"></span>
      <div className="sermon-container">
        <article className="sermon">
          <img src={image} alt="" />
          <section className="span-2">
            <div className="left">
              <h6>Jan 5 2021</h6>
              <h4>By Don Meon</h4>
            </div>
            <div className="right">
              <FaBook />
            </div>
          </section>
        </article>

        <article className="sermon">
          <img src={image} alt="" />
          <section className="span-2">
            <div className="left">
              <h6>Jan 5 2021</h6>
              <h4>By Don Meon</h4>
            </div>
            <div className="right">
              <FaBook />
            </div>
          </section>
        </article>

        <article className="sermon">
          <img src={image} alt="" />
          <section className="span-2">
            <div className="left">
              <h6>Jan 5 2021</h6>
              <h4>By Don Meon</h4>
            </div>
            <div className="right">
              <FaBook />
            </div>
          </section>
        </article>

        <article className="sermon">
          <img src={image} alt="" />
          <section className="span-2">
            <div className="left">
              <h6>Jan 5 2021</h6>
              <h4>By Don Meon</h4>
            </div>
            <div className="right">
              <FaBook />
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Sermon;
