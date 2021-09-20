import React from "react";
import {
  FaEnvelopeSquare,
  FaFacebook,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import image from "../images/gallery-3.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h4 className="sidebar-title">SAINT OF THE WEEK</h4>
      <div className="sidebar-content">
        <img src={image} alt="" side />
        <h4 className="title">ST MARK</h4>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corrupti
          natus ad consequatur fugit officiis quasi nulla tempore eos enim!
        </p>
      </div>
      <h4 className="sidebar-title">PASTORAL TEAM</h4>
      <ol className="sidebar-team">
        <li>Fr, Gabriel Odin</li>
        <li>Fr, Gabriel Odin</li>
        <li>Fr, Gabriel Odin</li>
        <li>Fr, Gabriel Odin</li>
      </ol>
      <h4 className="sidebar-title">FOLLOW US</h4>
      <article className="sidebar-icons">
        <FaFacebookSquare />
        <FaYoutubeSquare />
        <FaEnvelopeSquare />
      </article>
    </div>
  );
};

export default SideBar;
