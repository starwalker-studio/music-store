import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Register from './Register/Register';

const MyAccount = () => {
    const key = <FontAwesomeIcon icon={faKey} size="2x" />
    return (
        <div className="container my-account">
            <div className="mt-2">
                <div className="row p-2 me-3 ms-3 justify-content-center">
                    <div className="row g-0 col-9">
                        <div className="my-account-title">
                            <span className="my-account-title-icon">{key}</span>
                            <div className="mt-2 mb-1 ms-3 me-3">
                                <h4 className="fw-bold">My account</h4>
                            </div>
                        </div>
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;
