import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Register = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/auth/register", {
      username: usernameRef.current.value.toLowerCase(),
      email: emailRef.current.value.toLowerCase(),
      password: passwordRef.current.value.toLowerCase(),
});
    window.location.replace('/login')
    console.log(res)
  };
  return (
    <>
      <NavBar />
      <article className="register">
        <form className="register-form" onSubmit={handleSubmit}>
          <h4 className="register-title">Create an account</h4>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" id="userName" required ref={usernameRef} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required ref={passwordRef} />
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
