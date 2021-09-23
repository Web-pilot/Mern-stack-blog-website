import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  const data = posts[1];
  const last = posts[0];
  const PF = "http://localhost:5000/images/";
  return (
    <main className="blog-carousel">
      <h1 className="blog-title-page">Stories...</h1>
      <div className="carousel">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />

        <div className="navigation-auto">
          <div className="auto-btn check1"></div>
          <div className="check2 auto-btn"></div>
        </div>

        <div className="slide first">
          <img src={PF + data?.photo} alt="" />
          <Link to={`/post/${data?._id}`}>
            <article className="event-information">
              <h1>{data?.title}</h1>
              <h5>{new Date(data?.createdAt).toDateString()}</h5>
            </article>
          </Link>
        </div>
        <div className="slide">
          <img src={PF + last?.photo} alt="" />
          <Link to={`/post/${last?._id}`}>
            <article className="event-information">
              <h1>{last?.title}</h1>
              <h5>{new Date(last?.createdAt).toDateString()}</h5>
            </article>
         </Link>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
