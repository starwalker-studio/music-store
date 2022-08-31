import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  const [edit, setEdit] = useState(true);
  const [editIcon, setEditIcon] = useState(true);
  const [editUserName, setEditUserName] = useState(true);
  const [editFirstName, setEditFirstName] = useState(true);
  const [editLastName, setEditLastName] = useState(true);
  const [editMail, setEditMail] = useState(true);
  const [editPassword, setEditPassword] = useState(true);
  const profile = <FontAwesomeIcon icon={faUserCircle} size="6x" />
  const Account = () => {
    return (
      <div>
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
          <div className="col"><input type="password" value={"123456778989"} /></div>
        </div>
      </div>
    )
  }
  const Edit = () => {
    return (
      <div>
        <div className='d-flex justify-content-start edit-info-box'>
          <div className="col-4"><p className='title-edit-info'>User name:</p></div>
          <div className="col">
            <div className="input-group">
              <input type="text" id="typeText" className="form-control" placeholder='Starwalker' disabled={editUserName} />
              <button className={editUserName ? ('btn btn-secondary') : ('btn btn-danger')} type="button" onClick={() => {
                editUserName ? setEditUserName(false) : setEditUserName(true);
              }}>{editUserName ? ('Edit') : ('Cancel')}</button>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-start edit-info-box'>
          <div className="col-4"><p className='title-edit-info'>First Name:</p></div>
          <div className="col">
            <div className="input-group">
              <input type="text" id="typeText" className="form-control" placeholder='Juan Alberto' disabled={editFirstName} />
              <button className={editFirstName ? ('btn btn-secondary') : ('btn btn-danger')} type="button" onClick={() => {
                editFirstName ? setEditFirstName(false) : setEditFirstName(true);
              }} >{editFirstName ? ('Edit') : ('Cancel')}</button>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-start edit-info-box'>
          <div className="col-4"><p className='title-edit-info'>Last Name:</p></div>
          <div className="col">
            <div className="input-group">
              <input type="text" id="typeText" className="form-control" placeholder='Rodriguez Sotelo' disabled={editLastName} />
              <button className={editLastName ? ('btn btn-secondary') : ('btn btn-danger')} type="button" onClick={() => {
                editLastName ? setEditLastName(false) : setEditLastName(true);
              }}>{editLastName ? ('Edit') : ('Cancel')}</button>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-start edit-info-box'>
          <div className="col-4"><p className='title-edit-info'>Mail:</p></div>
          <div className="col">
            <div className="input-group">
              <input type="text" id="typeText" className="form-control" placeholder='starwalker@mail.com' disabled={editMail} />
              <button className={editMail ? ('btn btn-secondary') : ('btn btn-danger')} type="button" onClick={() => {
                editMail ? setEditMail(false) : setEditMail(true);
              }}>{editMail ? ('Edit') : ('Cancel')}</button>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-start edit-info-box'>
          <div className="col-4"><p className='title-edit-info'>My Password:</p></div>
          <div className="col">
            <div className="input-group">
              <input type="password" id="typeText" className="form-control" value={'123123123'} disabled={editPassword} />
              <button className={editPassword ? ('btn btn-secondary') : ('btn btn-danger')} type="button" onClick={() => {
                editPassword ? setEditPassword(false) : setEditPassword(true);
              }}>{editPassword ? ('Edit') : ('Cancel')}</button>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-start edit-info-box'>
          <div className="col-4"><p className='title-edit-info'>New Password:</p></div>
          <div className="col">
            <input type="password" id="typeText" className="form-control" disabled />
          </div>
        </div>
        <div className='d-flex justify-content-start edit-info-box'>
          <div className="col-4"><p className='title-edit-info'>Confirm Password:</p></div>
          <div className="col">
            <input type="password" id="typeText" className="form-control" disabled />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <h2>Hi Starwalker</h2>
      <hr />
      <div className="d-flex justify-content-center">
        <div className="col-3">
          <div className="d-flex justify-content-center account-profile-image">
            <span>{profile}</span>
          </div>
          {
            !edit && (
              <div className="d-flex justify-content-center">
                {editIcon ? (
                  <button className="btn btn-light btn-sm border" 
                    onClick={() => {
                      setEditIcon(false);
                    }}>Change Icon</button>
                ) : (
                  <div className="btn-group" role="group" id="drop-icon-menu" >
                    <button id="btnSelectIcon" type="button"
                      className="btn-sm btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false" onBlur={() => { setEditIcon(true) }}>
                      Select Icon
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnSelectIcon">
                      <li><p className="dropdown-item">Icon 1</p></li>
                      <li><p className="dropdown-item">Icon 2</p></li>
                      <li><button className="btn btn-danger" onClick={() => {
                        setEditIcon(true);
                      }}>Cancel</button></li>
                    </ul>
                  </div>
                )}

              </div>
            )
          }
        </div>
        <div id='user-account-info' className="col">
          {edit ? (<Account />) : (<Edit />)}
        </div>
      </div >
      <hr />
      <div id="account-edit-button">
        <div className="d-flex justify-content-center">
          <button className={edit ? ('edit-profile-button') : ('save-edit-button')}
            onClick={() => {
              if (!edit) {
                setEdit(true);
              } else {
                setEdit(false);
              }
            }}>{edit ? ('Edit Profile') : ('Save Changes')}</button>
        </div>
        <hr />
        <div className="p-1">
          <p className='alert alert-info'>
            Updating your password from time to time is a great way to protect your information and prevent unauthorized persons from viewing your account. You can also easily update your username if your email address has changed.
          </p>
        </div>
      </div>
    </div >
  )
}

export default Info;