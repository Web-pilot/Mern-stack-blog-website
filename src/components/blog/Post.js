import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";
import NavBar from "../NavBar";

const Post = () => {
  return (
    <>
      <NavBar />
      <main className="container-post">
        <section className="single-post">
          <h1 className="single-post-title">About saint peter </h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV35IBH99knwA26JW1hw9DG4PFh7e9DE8t6g&usqp=CAU"
            alt=""
          />
          <div className="edit-delete">
            <FaEdit className="edit-icon" />
            <FaTrash className="delete-icon" />
          </div>
          <div className="details">
            <h5>
              Author: <span>Paul</span>
            </h5>
            <h5>
              <span>Jan, 20 2021</span>
            </h5>
          </div>
          <article className="post-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nisi qui animi officiis quam explicabo et enim aliquid voluptates
            necessitatibus repellendus blanditiis sequi atque, quis aut rerum
            similique recusandae eligendi quidem soluta! Facilis quos vel nemo
            quas laudantium. In hic cumque asperiores quas. Maiores tempore modi
            fugiat consequatur quasi sunt reiciendis, tempora qui voluptatum
            iusto at perferendis deserunt alias consequuntur illo voluptatibus
            pariatur voluptates corrupti tenetur. Earum asperiores magnam sed
            nostrum minima accusantium autem perferendis quaerat quis. Fugiat,
            unde aut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio dignissimos unde, vero et accusantium quibusdam cumque modi
            cupiditate delectus veritatis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Velit ea laboriosam reiciendis dolore.
            Quia reiciendis sed dignissimos libero reprehenderit maiores!
          </article>
        </section>
      </main>
    </>
  );
};
export default Post;
