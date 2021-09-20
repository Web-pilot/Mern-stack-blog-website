import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <article className="register">
        <form className="login-form">
          <h4 className="register-title">Sign in to your account</h4>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" id="userName" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-control">
            <input type="submit" value="Login" className="register-btn" />
          </div>
          <h5>
            Don't have an account?<span></span>
            <Link to="/register">Register</Link>
          </h5>
        </form>
      </article>
    </>
  );
};

export default Login;
