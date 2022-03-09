import React from "react";
// import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Button from '@material-ui/core/Button';
// import SearchIcon from '@material-ui/icons/Search';
import Navbar from "./Navbar";

const Menu = () => {
    return (
        <>
            {/* <NavLink activeClassName="active_class" to="/" >AboutUS</NavLink>
            <NavLink activeClassName="active_class" to="/contact" >ContactUS</NavLink> */}

            <Navbar></Navbar>
            <br />
            <h1>Hello, This is Menu page</h1>
        </>
    )
}

export default Menu;