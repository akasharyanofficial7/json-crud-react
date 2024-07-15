import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateData from "./UpdateData";
import { Link } from "react-router-dom";

const Result = () => {
  const [data, setData] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setData(response.data);
      } catch (error) {
        console.log("we got error");
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    setEditUserId(id);
  };

  return (
    <div className="container">
      <h1>Fetched Data</h1>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - {item.email}
            <Link
              to="/updatedata"
              className="btn btn-primary ml-5 pl-5"
              onClick={() => handleEdit(item.id)}
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
      {editUserId && <UpdateData userId={editUserId} />}
    </div>
  );
};

export default Result;
