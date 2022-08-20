import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCreditCard, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Info from './Account-Info/Info';
import PaymentOptions from './Payment-options/PaymentOptions';
import MyCart from './My-Cart/MyCart';
import MyWishList from './My-wish-list/MyWishList';

const UserAccount = () => {
    const home = <FontAwesomeIcon icon={faHome} size="1x" />
    const creditCard = <FontAwesomeIcon icon={faCreditCard} size="1x" />
    const wishList = <FontAwesomeIcon icon={faBars} size="1x" />
    const cart = <FontAwesomeIcon icon={faShoppingCart} size="1x" />
    return (
        <Router>
            <div>
                <div className="d-flex justify-content-center user-account">
                    <div id="user-menu" className="col-3 user-account__menu">
                        <ul className='nav flex-column'>
                            <li className='nav-item'>
                                <NavLink className='nav-link link-dark' to="/account-info">
                                    <span className='svg--icon--menu'>{home}</span>
                                    Account Info
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link link-dark' to="/payment-options">
                                    <span className='svg--icon--menu'>{creditCard}</span>
                                    Payment Options
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link link-dark' to="/wish-list">
                                    <span className='svg--icon--menu'>{wishList}</span>
                                    My Wish List
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link link-dark' to="/my-cart">
                                    <span className='svg--icon--menu'>{cart}</span>
                                    My Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col user-account__display">
                        <Switch>
                            <Route path="/account-info" component={Info} exact />
                            <Route path="/payment-options" component={PaymentOptions} exact />
                            <Route path="/wish-list" component={MyCart} exact />
                            <Route path="/my-cart" component={MyWishList} exact />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default UserAccount;