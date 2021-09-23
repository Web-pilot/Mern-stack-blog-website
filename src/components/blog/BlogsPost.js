import React, { useEffect, useState } from "react";

import Carousel from "./Carousel";
import NavBar from "../NavBar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const BlogsPost = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  //Getting a single post
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPost();
  }, [posts]);

  //Getting posts base on query string
  useEffect(() => {
    console.log(search);
    axios.get("/posts", +search);
  }, [search]);

  //Get all categories
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, [categories]);

  //public folder where all images are located
  const PF = "http://localhost:5000/images/";

  return (
    <>
      <NavBar />
      <Carousel post={posts}/>
      <article className="blogPost">
        <section className="category">
          <h1 className="sidebar-heading">Story Land</h1>
          <h4 className="sidebar-title">categories</h4>
          <ul>
            {categories.map((category) => {
              return (
                <li key={category._id} className="list-item">
                  <Link to={`/blogpost/cat=${category.name}`}>
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <main className="post-main-right">
          {posts.map((post) => {
            const { _id, title, desc, createdAt, categories, photo } = post;
            return (
              <section className="post first" key={_id}>
                <Link to={`/post/${_id}`}>
                  {photo && <img src={PF + photo} alt="" />}
                  <h5 className="post-cat">{categories}</h5>
                  <h2 className="post-title">{title}</h2>
                  <h5 className="post-time">
                    {new Date(createdAt).toDateString()}
                  </h5>
                  <p>{desc}</p>
                </Link>
              </section>
            );
          })}
        </main>
      </article>
    </>
  );
};

export default BlogsPost;
