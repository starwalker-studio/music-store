import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

const PaymentOptions = () => {
  const visa = <FontAwesomeIcon icon={faCcVisa} />
  return (
    <div className='container'>
      <h3>Payment Information</h3>
      <hr />
      <div className="d-flex justify-content-center pb-3">
        <div className="col-2 payment-box">
          <div className="payment-info" id='card-info-title'>
            <p>My Card</p>
          </div>
        </div>
        <div className="col-8 payment-box" id='payment-info-box'>
          <div className="payment-info">
            <label>Name on Card</label>
            <input type="text" className='form-control' placeholder='Juan Alberto Rodriguez Sotelo' disabled />
          </div>
          <div className="payment-info">
            <label>Card Number</label>
            <div className="input-group" id='card-icon-input-group'>
              <input type="text" className='form-control' placeholder='1111 2222 3333 4444' disabled />
              <span className='input-group-text'>{visa}</span>
            </div>
          </div>
        </div>
        <div className="col" id='payment-info-box'>
          <div className="payment-info">
            <div className="col">
              <label>Expiration Date</label>
              <input type="text" className='form-control' placeholder='MM/YYYY' disabled />
            </div>
          </div>
          <div className="payment-info">
            <div className="col">
              <label>CVV</label>
              <input type="password" className='form-control' value={'123'} disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-2"></div>
        <div className="col border-buttton-edit-card pt-4 pb-2">
          <button className="edit-card-button">Edit Card</button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default PaymentOptions;