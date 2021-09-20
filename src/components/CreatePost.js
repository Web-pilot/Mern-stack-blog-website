import React from "react";

import image from "../images/category-2.jpg";
import { FaPlusCircle } from "react-icons/fa";
import NavBar from "./NavBar";

const CreatePost = () => {
  return (
    <>
      <NavBar />
      <article className="create-post">
        <form>
          <div className="create-post-img">
            <img src={image} alt="" />
            <label htmlFor="photo">
              <FaPlusCircle className="add-foto-icon" />
            </label>
          </div>
          <div className="create-post-form">
            <div className="form-group">
              <input type="file" id="photo" />
              <label htmlFor="title"></label>
              <input
                type="text"
                id="title"
                placeholder="Title..."
                autoFocus
                required
              />
              <textarea
                name=""
                id="text"
                type="text"
                placeholder="Enter your story to publish..."
                required
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" name="" id="publish-btn" value="Publish" />
          </div>
        </form>
      </article>
    </>
  );
};

export default CreatePost;
