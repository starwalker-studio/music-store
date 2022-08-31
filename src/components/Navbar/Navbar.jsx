import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [localUser, setLocalUser] = useState({});

    useEffect(() => { setLocalUser(JSON.parse(localStorage.getItem('user'))) }, []);

    // const { user_name, nombre, correo } = localUser;

    // console.log(user_name);

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark navbar-menu-color'>
                <div className="container">
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                        role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" id="navbarDropdown"
                                        href="#">
                                        {
                                            localUser ? localUser.user_name : 'Account'
                                        }
                                        </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        {
                                            localUser ? (
                                                <li className="p-3">
                                                    <div className="d-grid col mx-auto mb-2">
                                                        <button className="btn btn-dark">Log out</button>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <NavLink className="small" to="/" exact>My account</NavLink>
                                                    </div>
                                                </li>
                                            ) : (
                                                <li className="p-3">
                                                    <div className="d-grid col mx-auto mb-2">
                                                        <button className="btn btn-dark">Log in</button>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <NavLink className="small" to="/" exact>Create your account</NavLink>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='nav-menu-bar'>
                <ul className="nav justify-content-center p-1">
                    <li className="nav-item">
                        <a className="nav-link me-4 ms-4" href="#">Amps & Effects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Guitars</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-4 ms-4" href="#">Basses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-4 ms-4" href="#">Drums</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-4 ms-4" href="#">Home Studio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-4 ms-4" href="#">Live Sound</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
