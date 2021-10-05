import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Navbar.css';
const Header = () => {

    // style apply on nav items
    const activeStyle={
        fontWeight:'bold',   
    }
    return (
        <div className="me-0">
            {/* navbar started  */}
            <nav className = "navbar navbar-expand-lg navbar-light bg-dark text-white">
                <div className="container-fluid container">
                    
                    {/* Nav brand name  */}
                    <a className="navbar-brand text-white m-auto" href="/home"><span className="brand-name"> ProCoders Academy</span></a>

                    {/* small device button icon */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                    </button>

                    {/* Navbar menu item */}
                    <div className="collapse navbar-collapse " id="navbarScroll">
                         <ul className="navbar-nav mb-lg-0 mx-auto " >
                               <li className="nav-item" >
                                    <NavLink activeStyle={activeStyle} className="nav-link text-white fs-5"  to="home">Home</NavLink>
                                </li>
                               <li className="nav-item ">
                                    <NavLink activeStyle={activeStyle} className="nav-link text-white fs-5"  to="courses">Courses</NavLink>
                                </li>
                               <li className="nav-item ">
                                    <NavLink activeStyle={activeStyle} className="nav-link text-white fs-5"  to="tutorials">Tutorials</NavLink>
                                </li>
                               <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link text-white fs-5"  to="about">About Us</NavLink>
                                </li>

                           </ul>
                           {/* search field  */}
                        <div className="w-50 search-field my-2 m-auto ms-lg-auto">
                            <form className="d-flex">

                                {/* search input  */}
                            <input className="form-control me-2" type="search" placeholder="Search Course here..." aria-label="Search"/>

                            {/* search button  */}
                            <button className="btn btn-outline-success text-white fs-6 fw-bold bg-warning text-dark" type="submit">Search</button>
                            </form>
                       </div>  
                      
                    </div>
                </div>
             </nav>
        </div>
    );
};

export default Header;

