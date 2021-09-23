import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import axios from "axios";
import { Context } from "../context/Context";

const Sermon = () => {
  const { user } = useContext(Context);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts?s=4");
      setPost(res.data);
    };
    fetchPost();
  }, []);

  const PF = "http://localhost:5000/images/";
  return (
    <section className="section">
      <h4 className="title">HOME OF SWEET STORIES</h4>
      <span className="underline"></span>
      <div className="sermon-container">
        {posts.map((post) => {
          return (
            <>
              <Link to={user ? `/post/${post._id}` : "/register"} key={post._id}>
                <article className="sermon">
                  <img src={PF + post.photo} alt="" />
                  <section className="span-2">
                    <div className="left">
                      <h6>{new Date(post.createdAt).toDateString()}</h6>
                      <h4>{post.title}</h4>
                    </div>
                    <div className="right">
                      <FaBook />
                    </div>
                  </section>
                </article>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Sermon;
