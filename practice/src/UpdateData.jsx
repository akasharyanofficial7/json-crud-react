import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
const UpdateData = ({ userId }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/users/${userId}`
          );
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUser();
    }
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userId) {
        await axios.put(`http://localhost:3000/users/${userId}`, user);
        alert("User updated successfully");
      } else {
        await axios.post("http://localhost:3000/users", user);
        alert("User added successfully");
      }
      setUser({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <>
      <div className="container  w-50 mt-5  bg-dark ">
        <h2 className="container  w-50 mt-5  bg-primary">Update this form</h2>
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
          <Link to="/result" className="btn btn-success m-2">
            Result
          </Link>
        </form>
      </div>
    </>
  );
};

export default UpdateData;
