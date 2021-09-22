import axios from "axios";
import React, { useContext, useState } from "react";

import { FaTrash, FaUser } from "react-icons/fa";
import { Context } from "../context/Context";
import NavBar from "./NavBar";

const UpdateUser = () => {
  const { dispatch, user } = useContext(Context);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false)

  const PF = "http://localhost:5000/images/";

  const handleUpdate = async (e) => {
    e.preventDefault();

    dispatch({type: 'UPDATE_START'})
    const newUpdate = {
       userId: user._id,
      username,
      email,
      password,
      profilePic: file ? file : user.profilePic
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newUpdate.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.put(`/users/${user._id}`, newUpdate);
      dispatch({type: 'UPDATE_SUCCESS', payLoad: res.data})
      setSuccess(true);
    } catch (error) {
      console.log(error);
      dispatch({type: 'UPADATE_FAILURE'})
    }
  };

  return (
    <>
      <NavBar />
      <section className="update-user-container">
        <h5>Change User Info</h5>
        <div className="user-info">
          <form onSubmit={handleUpdate}>
            <div className="avatar">
              <img src={file ? URL.createObjectURL(file) : PF + user.profilePic}  alt="" />
              <label htmlFor="profPic">
                <FaUser className="plus-icon" />
              </label>
            </div>
            <input
              type="file"
              name="userProf"
              id="profPic"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="form-control">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input type="email" value={email} onChange={e=> setEmail(e.target.value)} />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div id="delete-btn">
              <FaTrash />{" "}
              <input
                type="button"
                value="Delete Account"
                style={{ background: "inherit", border: "none" }}
              />
            </div>
            <button type="submit" className="update-btn">
              Update
            </button>
          </form>
          {success && <span style={{color: 'green'}}>user updated successfuly</span>}
        </div>
      </section>
    </>
  );
};

export default UpdateUser;
