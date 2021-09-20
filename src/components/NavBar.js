import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

import image from "../images/category-2.jpg";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };
  let user = true;
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-brand">
          <h1 className="nav-logo">
            <Link to="/">St John</Link>
          </h1>
          {user && (
            <div className="setting">
              <img src={image} alt="" className="profile" />
            </div>
          )}
          <FaBars className="toggle-btn" onClick={toggleNavbar} />
        </div>
        <ul className={`nav-list ${isNavOpen && "show"}`}>
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/blogpost">Blog Post</Link>
          </li>
          <li className="list-item">
            <Link to="/contact">Contact</Link>
          </li>
          {user && (
            <li className="list-item">
              <Link to="/createpost">Publish</Link>
            </li>
          )}
          {user && (
            <li className="list-item">
              <FaUser /> LogOut
            </li>
          )}
        </ul>
        <div className="social-icons">
          {user || (
            <Link to="/register" className="signIn-btn">
              Register
            </Link>
          )}
          {user || (
            <Link to="/login" className="signIn-btn">
              Login
            </Link>
          )}
          <a href="@">
            <FaFacebook />
          </a>
          <a href="@">
            <FaTwitter />
          </a>
          <a href="@">
            <FaPinterest />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
