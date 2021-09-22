import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import NavBar from "./NavBar";

const Login = () => {
  const { dispatch, isFetching, error } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payLoad: res.data });
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <>
      <NavBar />
      <article className="register">
        <form className="login-form" onSubmit={handleSubmit}>
          <h4 className="register-title">Sign in to your account</h4>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="userName"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input type="submit" value="Login" className="register-btn" />
          </div>
          <span>{error && "Somethng went wrong"}</span>
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
