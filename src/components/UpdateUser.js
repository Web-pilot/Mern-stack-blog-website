import React from "react";

import { FaPlus } from "react-icons/fa";

const UpdateUser = () => {
  return (
    <section className="update-user-container">
      <h1>Change User Info</h1>
      <div className="user-info">
        <form action="">
          <div className="avatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV35IBH99knwA26JW1hw9DG4PFh7e9DE8t6g&usqp=CAU"
              alt=""
            />
            <label htmlFor="profPic">
              <FaPlus className="plus-icon" />
            </label>
          </div>
          <input type="file" name="userProf" id="profPic" />
          <div className="form-control">
            <input type="text" name="" id="" placeholder="" />
          </div>
          <div className="form-control">
            <input type="email" name="" id="" placeholder="" />
          </div>
          <div className="form-control">
            <input type="password" name="" id="" placeholder="" />
          </div>
          <input type="submit" name="" id="update-btn" value="Update" />
        </form>
      </div>
    </section>
  );
};

export default UpdateUser;
