import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerNewAccount } from '../../../redux/newAccountRedux';
import * as environment from '../../../environment';

const Register = () => {
    //form values
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    //form warning flags
    const [inValid, setInValid] = useState('form-control mb-2');
    const [inValidConfirmPassword, setInValidConfirmPassword] = useState('form-control mb-2');
    const [inValidMail, setInValidMail] = useState('form-control mb-2');
    const [warningUser, setWarningUser] = useState(true);
    const [warningPassword, setWarningPassword] = useState(true);
    const [warningConfirmPassword, setWarningConfirmPassword] = useState(true);
    const [notSamePassword, setNotSamePassword] = useState(true);
    const [warningName, setWarningName] = useState(true);
    const [warningLastName, setWarningLastName] = useState(true);
    const [warningMail, setWarningMail] = useState(true);
    const [correctMail, setCorrectMail] = useState(true);
    //mail pattern
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Validations
    const [validUserName, setValidUserName] = useState();
    const [validPassword, setValidPassword] = useState();
    const [validName, setValidName] = useState();
    const [validLastName, setValidLastName] = useState();
    const [validMail, setValidMail] = useState();
    // Object dispatch
    const [account, setAccount] = useState({
        username: '', password: '', userFirstName: '', userLastName: '', userMail: ''
    });
    // button active
    const [button, setButton] = useState(false);

    const dispatch = useDispatch();

    const submitAccount = () => {
        if (!userName.trim()) {
            setInValid('form-control is-invalid mb-2');
            setWarningUser(false);
            return
        }
        if (!password.trim()) {
            setInValid('form-control is-invalid mb-2');
            setWarningPassword(false);
            setValidPassword(false);
            return
        }
        if (!confirmPassword.trim()) {
            setInValidConfirmPassword('form-control is-invalid mb-2');
            setWarningConfirmPassword(false);
            return
        } else {
            if (password !== confirmPassword) {
                setInValidConfirmPassword('form-control is-invalid mb-2');
                setNotSamePassword(false);
                return
            }
        }
        if (!name.trim()) {
            setInValid('form-control is-invalid mb-2');
            setWarningName(false);
            return
        }
        if (!lastName.trim()) {
            setInValid('form-control is-invalid mb-2');
            setWarningLastName(false);
            return
        }
        if (!mail.trim()) {
            setInValid('form-control is-invalid mb-2');
            setWarningMail(false);
            return
        } else {
            if (!pattern.test(mail)) {
                setInValidMail('form-control is-invalid mb-2');
                setCorrectMail(false);
                return
            }
        }
        console.log('username: ' + validUserName);
        console.log('password: ' + validPassword);
        console.log('name: ' + validName);
        console.log('lastname: ' + validLastName);
        console.log('mail: ' + validMail);
        if (validUserName && validPassword && validName && validLastName && validMail) {
            console.log(account);
            dispatch(registerNewAccount(account));
            setButton(true);
        } else {
            console.log('No furula');
        }
    }
    return (
        <div>
            <div className="d-flex justify-content-center border-start border-end">
                <div className="create-account-text col-5">
                    <h4 className="mt-1 p-3 ms-2 me-2 fw-bold">Create Your Account</h4>
                    <p className="fw-light mb-2 p-3 ms-2 me-2 small">{environment.CREATE_YOUR_ACCOUNT}</p>
                    <p className="fw-lighter fst-italic p-3 ms-2 me-2">Already have an account? Sign in</p>
                </div>
                <div className="col p-2 me-3 ms-3 mt-1">
                    <div className="mt-1 mb-3">
                        <label className="form-label fw-bold">User Name</label>
                        <input type="text"
                            className={userName.trim() ? ('form-control mb-2') : (inValid)}
                            placeholder="User Name"
                            onChange={(e) => {
                                setUserName(e.target.value)
                                if (e.target.value.trim()) {
                                    setWarningUser(true);
                                    setValidUserName(true);
                                }
                                setAccount({
                                    ...account,
                                    username: e.target.value
                                })
                            }}
                            value={userName}
                            required />
                        {!warningUser && (<p className="invalid-return">Please enter a user name</p>)}
                    </div>
                    <div className="mt-1 mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input type="password"
                            className={password.trim() ? ('form-control mb-2') : (inValid)}
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                                if (e.target.value.trim()) {
                                    setWarningPassword(true);
                                    setInValidConfirmPassword('form-control mb-2')
                                }
                            }}
                            value={password} />
                        {!warningPassword && (<p className="invalid-return">Please enter a password</p>)}
                        <input type="password"
                            className={(inValidConfirmPassword)}
                            placeholder="Confirm Password"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                                if (e.target.value.trim()) {
                                    setInValidConfirmPassword('form-control mb-2')
                                    setWarningConfirmPassword(true);
                                }
                                if (e.target.value !== password) {
                                    setInValidConfirmPassword('form-control is-invalid mb-2')
                                } else {
                                    setInValidConfirmPassword('form-control is-valid mb-2')
                                    setNotSamePassword(true)
                                    setValidPassword(true);
                                }
                                setAccount({
                                    ...account,
                                    password: e.target.value
                                })
                            }}
                            value={confirmPassword} disabled={!password.trim()} />
                        {!warningConfirmPassword && (<p className="invalid-return">Please confirm your password</p>)}
                        {!notSamePassword && (<p className="invalid-return">Must confirm the same password!</p>)}
                    </div>
                    <div className="mt-1 mb-3">
                        <label className="form-label fw-bold">Your Name</label>
                        <input type="text"
                            className={name.trim() ? ('form-control mb-2') : (inValid)}
                            placeholder="First Name"
                            onChange={(e) => {
                                setName(e.target.value)
                                if (e.target.value.trim()) {
                                    setWarningName(true);
                                    setValidName(true);
                                }
                                setAccount({
                                    ...account,
                                    userFirstName: e.target.value
                                })
                            }}
                            value={name} />
                        {!warningName && (<p className="invalid-return">Please enter your name</p>)}
                        <input type="text"
                            className={lastName.trim() ? ('form-control mb-2') : (inValid)}
                            placeholder="Last Name"
                            onChange={(e) => {
                                setLastName(e.target.value)
                                if (e.target.value.trim()) {
                                    setWarningLastName(true);
                                    setValidLastName(true);
                                }
                                setAccount({
                                    ...account,
                                    userLastName: e.target.value
                                })
                            }}
                            value={lastName} />
                        {!warningLastName && (<p className="invalid-return">Please enter your last name</p>)}
                    </div>
                    <div className="mt-1 mb-3">
                        <label className="form-label fw-bold">Your Email Address</label>
                        <input type="text"
                            className={(inValidMail)}
                            placeholder="E-mail"
                            onChange={(e) => {
                                setMail(e.target.value)
                                if (e.target.value.trim()) {
                                    setInValidMail('form-control mb-2')
                                    setWarningMail(true)
                                }
                                if (pattern.test(e.target.value)) {
                                    setCorrectMail(true)
                                    setInValidMail('form-control is-valid mb-2')
                                    setValidMail(true)
                                }
                                setAccount({
                                    ...account,
                                    userMail: e.target.value,
                                    active: "true",
                                    role: { "id": 2 }
                                })
                            }}
                            value={mail} />
                        {!warningMail && (<p className="invalid-return">Please enter your mail</p>)}
                        {!correctMail && (<p className="invalid-return">Please enter a correct mail</p>)}
                    </div>
                </div>
            </div>
            <div id="proceed">
                <p>
                    <button type="button"
                        className="btn btn-success px-4 fs-5 fst-italic"
                        onClick={() => submitAccount()}
                        disabled={button}>Create Your Account</button>
                </p>
            </div>
        </div>
    )
}

export default Register;
