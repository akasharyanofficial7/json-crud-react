import React, { useState, useEffect } from "react";

import axios from "axios";
const Result = () => {
  const [data1, setData] = useState([]);

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

  return (
    <div className="container">
      <h1>Fetched Data</h1>
      <ul className="list-group">
        {data1.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
