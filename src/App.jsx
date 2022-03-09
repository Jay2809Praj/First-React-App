import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Error from "./Error";
import Menu from "./Menu";
import Home from "./Home";
import Signin from "./Signin";
// import Button from '@mui/material/Button';





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
                    <Route exact path="/sign_in" element={<Signin />} />
                </Routes>
                {/* <div className="img_div">
                    <img src="https://yt3.ggpht.com/xFBJG44-Tt7_hW01pMbZZUoGuhq8GHOQZcnxi2JtyBMcxicetcWL-WoXPtWzM7-22kgeA6b8=s900-c-k-c0x00ffffff-no-rj" alt="new" />
                </div> */}



            </div>

        </>

    )
}

export default App;