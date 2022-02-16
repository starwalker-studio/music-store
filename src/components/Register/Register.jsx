import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const key = <FontAwesomeIcon icon={faKey} size="2x" />
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const submitAccount = () => {
        console.log(userName);
        console.log(password);
        console.log(confirmPassword);
        console.log(name);
        console.log(lastName);
        console.log(mail);
    }
    return (
        <div className="container">
            <div className="mt-2">
                <div className="row p-2 me-3 ms-3 justify-content-center">
                    <form className="row g-0 col-9">
                        <div className="my-account-title">
                            <span className="my-account-title-icon">{key}</span>
                            <div className="mt-2 mb-1 ms-3 me-3">
                                <h4 className="fw-bold">My account</h4>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center border-start border-end">
                            <div className="create-account-text col-5">
                                <h4 className="mt-1 p-3 ms-2 me-2 fw-bold">Create Your Account</h4>
                                <p className="fw-light mb-2 p-3 ms-2 me-2 small">Signing up for a SoundGarage.com account is fast, easy,
                                and free! Plus, it gives you access to some great website features that allow you to view your order history online,
                                create and edit personal Wish Lists, save your addresses and payment methods, and checkout quickly and easily.</p>
                                <p className="fw-lighter fst-italic p-3 ms-2 me-2">Already have an account? Sign in</p>
                            </div>
                            <div className="col p-2 me-3 ms-3 mt-1">
                                <div className="mt-1 mb-3">
                                    <label className="form-label fw-bold">User Name</label>
                                    <input type="text"
                                        className="form-control mb-2"
                                        placeholder="User Name"
                                        onChange={e => setUserName(e.target.value)}
                                        value={userName} />
                                </div>
                                <div className="mt-1 mb-3">
                                    <label className="form-label fw-bold">Password</label>
                                    <input type="text"
                                        className="form-control mb-2"
                                        placeholder="Password"
                                        onChange={e => setPassword(e.target.value)}
                                        value={password} />
                                    <input type="text"
                                        className="form-control mb-2"
                                        placeholder="Confirm Password"
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        value={confirmPassword} />
                                </div>
                                <div className="mt-1 mb-3">
                                    <label className="form-label fw-bold">Your Name</label>
                                    <input type="text"
                                        className="form-control mb-2"
                                        placeholder="First Name"
                                        onChange={e => setName(e.target.value)}
                                        value={name} />
                                    <input type="text"
                                        className="form-control mt-2 mb-2"
                                        placeholder="Last Name"
                                        onChange={e => setLastName(e.target.value)}
                                        value={lastName} />
                                </div>
                                <div className="mt-1 mb-3">
                                    <label className="form-label fw-bold">Your Email Address</label>
                                    <input type="text"
                                        className="form-control mb-2"
                                        placeholder="E-mail"
                                        onChange={e => setMail(e.target.value)}
                                        value={mail} />
                                </div>
                            </div>
                        </div>
                        <div id="proceed">
                            <p>
                                <button type="button"
                                    className="btn btn-success px-4 fs-5 fst-italic"
                                    onClick={() => { submitAccount() }}>Create Your Account</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
