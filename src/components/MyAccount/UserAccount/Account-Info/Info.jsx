import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  const profile = <FontAwesomeIcon icon={faUserCircle} size="6x" />
  return (
    <div className='container'>
      <h2>Hi Starwalker</h2>
      <hr />
      <div className="d-flex justify-content-center">
        <div className="col-3">
          <div className="d-flex justify-content-center account-profile-image">
            <span>{profile}</span>
          </div>
        </div>
        <div id='user-account-info' className="col">
          <div className='d-flex justify-content-start account-info-box'>
            <div className="col-3"><p className='title-user-info'>User name:</p></div>
            <div className="col"><p>Starwalker</p></div>
          </div>
          <div className='d-flex justify-content-start account-info-box'>
            <div className="col-3"><p className='title-user-info'>Your name:</p></div>
            <div className="col"><p>Juan Alberto Rodriguez Sotelo</p></div>
          </div>
          <div className='d-flex justify-content-start account-info-box'>
            <div className="col-3"><p className='title-user-info'>Current mail:</p></div>
            <div className="col"><p>starwalker@mail.com</p></div>
          </div>
          <div className='d-flex justify-content-start account-info-box'>
            <div className="col-3"><p className='title-user-info'>Password:</p></div>
            <div className="col"><input type="password" value={"123456778989"}/></div>
          </div>
        </div>
      </div>
      <hr />
      <div id="account-edit-button">
        <div className="d-flex justify-content-center">
          <button className="account-edit-profile">Edit Profile</button>
        </div>
        <hr />
        <div className="p-1">
          <p className='alert alert-info'>
            Updating your password from time to time is a great way to protect your information and prevent unauthorized persons from viewing your account. You can also easily update your username if your email address has changed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info;