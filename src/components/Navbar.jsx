import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar-style.css';

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
                <img src="/img/logo-white-nav.png" className={
                    navbar ? 'logo-nav ms-5' : 'logo-nav-top ms-5'
                } alt="" />
                <div className="text-left me-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            </div>
        </nav>
    )
}

export default Navbar;
