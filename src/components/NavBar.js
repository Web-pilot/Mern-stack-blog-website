import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

import { Context } from "../context/Context";

const NavBar = () => {
  const { dispatch, user } = useContext(Context);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleLogOut = () =>{
     dispatch({type: "LOG_OUT"})
  }
  const PF = 'http://localhost:5000/images/'
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-brand">
          <h1 className="nav-logo">
            <Link to="/">St John</Link>
          </h1>
          {user && (
             <Link to={`/settings`}>
            <div className="setting">
              <img src={PF + user.profilePic} alt="" className="profile" />
            </div>
            </Link>
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
            <li className="list-item" onClick={handleLogOut}>
              <FaUser /> LogOut
            </li>
          )}
        </ul>
        <div className="social-icons">
          {!user && (
            <Link to="/register" className="signIn-btn">
              Register
            </Link>
          )}
          {!user && (
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
