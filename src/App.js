import React, { useContext } from "react";

import BlogsPost from "./components/blog/BlogsPost";
import Post from "./components/blog/Post";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import UpdateUser from "./components/UpdateUser";

function App() {
  const { user } = useContext(Context);

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
          <Route path="/post/:id">{user ? <Post /> : <Register />}</Route>
          <Route path="/settings">{user ? <UpdateUser /> : <Register />}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
