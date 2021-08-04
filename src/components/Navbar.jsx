import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar-style.css';
import logo from '../img/logo-white-nav.png';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={ 
            navbar ? 'navbar navbar-expand-lg navbar-dark fixed-top navbar-menu-color' 
            : 'navbar navbar-expand-lg navbar-dark fixed-top navbar-return'
        }>
            <div className="container-fluid">
                <img src={logo} className={
                    navbar ? 'logo-nav ms-5' : 'logo-nav-top ms-5'
                } alt="" />
                <div className="text-left me-5">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link me-3" to="/" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link me-3" to="/" exact>Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link me-3" to="/" exact>Preferences</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
