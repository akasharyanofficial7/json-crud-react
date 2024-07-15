import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import FormData from "./FormData";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/form" element={<FormData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
