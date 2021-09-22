import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";

import { FaEdit, FaTrash } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import NavBar from "../NavBar";

const Post = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
    };
    fetchPost();
  }, [path]);

  const deletePost = async () => {
    await axios.delete("/posts/" + path, { data: { username: user.username } });
    window.location.replace("/blogpost");
  };

  const handleChanges = async () => {
    await axios.put(`/posts/${path}`, post);
    setIsEditing(false);
  };
  const PF = "http://localhost:5000/images/";
  return (
    <>
      <NavBar />
      <main className="container-post">
        <section className="single-post">
          {isEditing ? (
            <input
              type="text"
              value={post.title}
              id="title"
              className='edit-title'
              onChange={(e) =>
                setPost((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
          ) : (
            <h1 className="single-post-title">{post.title}</h1>
          )}
          {post.photo && <img src={PF + post.photo} alt="" />}
          {user.username === post.username && (
            <div className="edit-delete">
              <FaEdit
                className="edit-icon"
                onClick={() => setIsEditing(true)}
              />
              <FaTrash className="delete-icon" onClick={deletePost} />
            </div>
          )}

          <div className="details">
            <h5>
              <Link to={`/blogpost?username=${post.username}`}>
                Author: <span>{post.username}</span>
              </Link>
            </h5>
            <h5>
              <span>{new Date(post.createdAt).toDateString()}</span>
            </h5>
          </div>
          {isEditing ? (
            <>
              <textarea
                type="text"
                className="edit-post"
                rows="10"
                value={post.desc}
                onChange={(e) =>
                  setPost((prev) => {
                    return { ...prev, desc: e.target.value };
                  })
                }
              />
              <button id="publish-btn" onClick={handleChanges}>
                Update
              </button>
            </>
          ) : (
            <article className="post-desc">{post.desc}</article>
          )}
        </section>
      </main>
    </>
  );
};
export default Post;
