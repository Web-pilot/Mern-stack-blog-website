import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Register = () => {
  return (
    <>
      <NavBar />
      <article className="register">
        <form className="register-form">
          <h4 className="register-title">Create an account</h4>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" id="userName" required />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-control">
            <input type="submit" value="Register" className="register-btn" />
          </div>
          <h5>
            Have an account?<span></span>
            <Link to="/login">Sign In</Link>
          </h5>
        </form>
      </article>
    </>
  );
};

export default Register;
