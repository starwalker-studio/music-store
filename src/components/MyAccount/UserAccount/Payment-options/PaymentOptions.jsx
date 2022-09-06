import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const PaymentOptions = () => {
  const visa = <FontAwesomeIcon icon={faCcVisa} />
  const home = <FontAwesomeIcon icon={faHome} />
  const CardInfo = () => {
    return (
      <div className='col card-info-border'>
        <div className="d-flex justify-content-center pb-2">
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
        <div className="col border-button-edit-card pt-3">
          <div className="row justify-content-start">
            <div className="col-2"><button className="card-button__edit">Edit Card</button></div>
            <div className="col-2"><button className="card-button__cancel">Cancel</button></div>
          </div>
        </div>
      </div>
    )
  }

  const MyCard = () => {
    return (
      <div className='col-12 card-info-border'>
        <div class="row payment-info">
          <div className="col-sm-9" id='payment-info-box'>
            <div className="input-group" id='card-icon-input-group'>
              <label className='col-sm-3 col-form-label'>My card</label>
              <input type="text" className='form-control' placeholder='1111 2222 3333 4444' disabled />
              <span className='input-group-text'>{visa}</span>
            </div>
          </div>
          <div className="col">
            <button className="card-button__edit">See Details</button>
          </div>
        </div>
      </div>
    )
  }

  const MyAddress = () => {
    return (
      <div className='col-12 card-info-border'>
        <div class="row payment-info">
          <div className="col-sm-9" id='payment-info-box'>
            <div className="input-group" id='card-icon-input-group'>
              <label className='col-sm-3 col-form-label'>My Addresss</label>
              <input type="text" className='form-control' placeholder='795 Folsom Ave, Suite 600' disabled />
              <span className='input-group-text'>{home}</span>
            </div>
          </div>
          <div className="col">
            <button className="card-button__edit">See Details</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className="pt-2">
        <h5>Billing Information</h5>
      </div>
      <div className="pb-3">
        {true ? (<MyCard />) : (<CardInfo />)}
      </div>
      <br />
      <div className="pb-2 pt-4">
        <h5>Shipping Information</h5>
        <div className="pb-3">
          <MyAddress />
        </div>
      </div>
    </div>
  )
}

export default PaymentOptions;