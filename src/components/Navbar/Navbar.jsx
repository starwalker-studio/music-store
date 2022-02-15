import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark fixed-top navbar-menu-color'>
            <div className="container-fluid">
                <img src="/img/logo-white-nav.png" className='logo-nav ms-5' alt="sound garage" />
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
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link me-3" to="/" exact>Log in</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
