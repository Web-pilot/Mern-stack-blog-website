import React, { useState, useEffect } from "react";
import Activities from "./components/Activities";
import BlogsPost from "./components/blog/BlogsPost";
import Post from "./components/blog/Post";
import CreatePost from "./components/CreatePost";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Login from "./components/Login";

import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Sermon from "./components/Sermon";
import SideBar from "./components/SideBar";
import UpdateUser from "./components/UpdateUser";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let user = false;
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{!user ? <Register /> : <Home />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/createpost">
            {user ? <CreatePost /> : <Register />}
          </Route>
          <Route path="/blogpost">
            <BlogsPost />
          </Route>
          <Route path="/:id">{user ? <Post /> : <Register />}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
