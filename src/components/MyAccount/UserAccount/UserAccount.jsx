import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCreditCard, faBars, faShoppingCart, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import Info from './Account-Info/Info';
import PaymentOptions from './Payment-options/PaymentOptions';
import MyCart from './My-Cart/MyCart';
import MyWishList from './My-wish-list/MyWishList';

const UserAccount = () => {
    const home = <FontAwesomeIcon icon={faHome} size="1x" />
    const creditCard = <FontAwesomeIcon icon={faCreditCard} size="1x" />
    const wishList = <FontAwesomeIcon icon={faBars} size="1x" />
    const cart = <FontAwesomeIcon icon={faShoppingCart} size="1x" />
    const homeUser = <FontAwesomeIcon icon={faHouseUser} size="2x" />

    return (
        <Router>
            <div className="container my-account">
                <div className="mt-2">
                    <div className="row p-2 me-3 ms-3 justify-content-center">
                        <div className="row g-0 col-10">
                            <div className="my-account-title">
                                <span className="my-account-title-icon">{homeUser}</span>
                                <div className="mt-2 mb-1 ms-3 me-3">
                                    <h4 className="fw-bold">My account</h4>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-center user-account">
                                    <div id="user-menu" className="user-account__menu">
                                        <ul className='nav flex-column'>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link link-dark' to="/my-account/account-info">
                                                    <span className='svg--icon--menu'>{home}</span>
                                                    Account Info
                                                </NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link link-dark' to="/my-account/payment-options">
                                                    <span className='svg--icon--menu'>{creditCard}</span>
                                                    Payment Options
                                                </NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link link-dark' to="/my-account/wish-list">
                                                    <span className='svg--icon--menu'>{wishList}</span>
                                                    My Wish List
                                                </NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link link-dark' to="/my-account/my-cart">
                                                    <span className='svg--icon--menu'>{cart}</span>
                                                    My Cart
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="user-account__display">
                                        <Switch>
                                            <Route path="/my-account/account-info" component={Info} exact />
                                            <Route path="/my-account/payment-options" component={PaymentOptions} exact />
                                            <Route path="/my-account/wish-list" component={MyCart} exact />
                                            <Route path="/my-account/my-cart" component={MyWishList} exact />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>

    )
}

export default UserAccount;