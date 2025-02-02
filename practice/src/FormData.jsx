import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const FormData = () => {
  const [user, setUser] = useState({});

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", user);
      setUser({ name: "", email: "", password: "" });
      alert("user added successfully");
    } catch (error) {}
  };
  return (
    <>
      <div className="container  w-50 mt-5">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/updatedata" className="btn btn-dark m-2">
            Update
          </Link>
        </form>
      </div>
    </>
  );
};

export default FormData;
