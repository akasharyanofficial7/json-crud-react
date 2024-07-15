import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import FormData from "./FormData";
import Navbar from "./Navbar";
import Result from "./Result";
import UpdateData from "./UpdateData";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/form" element={<FormData />} />

          <Route path="/updatedata" element={<UpdateData />} />
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
