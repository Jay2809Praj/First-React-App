import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Error from "./Error";
import Menu from "./Menu";
import Home from "./Home";

const App = () => {
  return (
    <>
      <div className="main_div">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
