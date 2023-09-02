import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
            <NavLink className="navbar-brand">React Summer Course</NavLink>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls='navbarNav'
                aria-expanded="false"
                aria-label='toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>

                </button>
                <div id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className="nav-link"
                                    style={({isActive})=>({
                                        color:isActive?"#f00":"#000",
                                        fontWeight:isActive?"bold":"",
                                    })}
                                    aria-current="page"
                                    to="/"
                                    >Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link"
                                        to="/Comments"
                                    style={({isActive})=>({
                                        color:isActive?"#f00":"#000",
                                        fontWeight:isActive?"bold":"",
                                    })}
                                    
                                    >Comments</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link"
                            to="/FormEx"
                                    style={({isActive})=>({
                                        color:isActive?"#f00":"#000",
                                        fontWeight:isActive?"bold":"",
                                    })}
                                   
                                    >FormEx</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link"
                                        to="/Cunter"
                                    style={({isActive})=>({
                                        color:isActive?"#f00":"#000",
                                        fontWeight:isActive?"bold":"",
                                    })}
                                   
                                    >Counter</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link"
                                        to="/Parameters"
                                    style={({isActive})=>({
                                        color:isActive?"#f00":"#000",
                                        fontWeight:isActive?"bold":"",
                                    })}
                                   
                                    >Parameters</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link"
                                        to="/Aboutus"
                                    style={({isActive})=>({
                                        color:isActive?"#f00":"#000",
                                        fontWeight:isActive?"bold":"",
                                    })}
                                   
                                    >Aboutus</NavLink>
                        </li>
                    </ul>
                </div>
        </div>
        </nav>
  );
};

export default Navbar