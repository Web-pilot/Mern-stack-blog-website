import React from "react";

const Carousel = () => {
  return (
    <main className="blog-carousel">
      <h1 className="blog-title-page">Blog Post</h1>
      <div className="carousel">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />

        <div className="navigation-auto">
          <div className="auto-btn check1"></div>
          <div className="check2 auto-btn"></div>
        </div>

        <div className="slide first">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV35IBH99knwA26JW1hw9DG4PFh7e9DE8t6g&usqp=CAU"
            alt=""
          />
          <a href="@">
            <article className="event-information">
              <h1>Global Crusade</h1>
              <h5>Sempt. 23, 2021</h5>
            </article>
          </a>
        </div>
        <div className="slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV35IBH99knwA26JW1hw9DG4PFh7e9DE8t6g&usqp=CAU"
            alt=""
          />
          <article className="event-information">
            <h1>Feast of Assumption</h1>
          </article>
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
