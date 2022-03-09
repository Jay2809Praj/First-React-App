import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center mt-3 pt-3">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/menu">Menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/navbar">Navbar</NavLink>
                </li>
                <div className="search">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        <div className="btn">
                            <Button variant="contained">
                                <SearchIcon />
                            </Button>
                            {/* <Button variant="contained" color="primary">
                                    Sign up
                                </Button> */}
                        </div>

                    </form>
                </div>

            </ul>
        </>
    )
}

export default Navbar;