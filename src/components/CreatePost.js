import React, { useContext, useState } from "react";

import { FaPlusCircle } from "react-icons/fa";
import NavBar from "./NavBar";
import { Context } from "../context/Context";
import axios from "axios";

const CreatePost = () => {
  //Context
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  //HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStory = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newStory.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
     await axios.post("/posts", newStory);
      window.location.replace(`/blogpost`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <article className="create-post">
        <form onSubmit={handleSubmit}>
          <div className="create-post-img">
            {file && <img src={URL.createObjectURL(file)} alt="" />}
            <label htmlFor="photo">
              <FaPlusCircle className="add-foto-icon" />
            </label>
          </div>
          <div className="create-post-form">
            <div className="form-group">
              <input
                type="file"
                id="photo"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label htmlFor="title"></label>
              <input
                type="text"
                id="title"
                placeholder="Title..."
                autoFocus
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                name=""
                id="text"
                type="text"
                placeholder="Story..."
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
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
