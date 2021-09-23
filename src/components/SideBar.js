import React from "react";
import { FaPhone } from "react-icons/fa";

import image from "../images/gallery-3.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h4 className="sidebar-title">CREATOR</h4>
      <div className="sidebar-content">
        <img src={image} alt="" side />
        <h4 className="title">OCHAGWU PAUL</h4>
        <p className="desc">
          Story Land is one of the website created by Ochagwu Paul as one of his
          first NodeJs project
        </p>
      </div>

      <h4 className="sidebar-title">CONTACT HIM</h4>
      <article className="sidebar-icons">
        <FaPhone /> +234-815-809-9730
      </article>
    </div>
  );
};

export default SideBar;
