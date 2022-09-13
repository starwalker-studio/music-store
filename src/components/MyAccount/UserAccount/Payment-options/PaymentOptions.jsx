import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

const PaymentOptions = () => {
  
  const [editCard, setEditCard] = useState(true);
  const [editAddress, setEditAddress] = useState(true);
  const [editCardInfo, setEditCardInfo] = useState(true);
  const [editAddressInfo, setEditAddressInfo] = useState(true);
  const visa = <FontAwesomeIcon icon={faCcVisa} />
  const home = <FontAwesomeIcon icon={faHome} />
  const add = <FontAwesomeIcon icon={faPlus} />
  
  const northAmerica = [
    {
      id: 1,
      country: 'Select Country'
    },
    {
      id: 2,
      country: 'Canada'
    },
    {
      id: 3,
      country: 'EUA'
    },
    {
      id: 4,
      country: 'México'
    }
  ]

  const CardInfo = () => {
    return (
      <div className='col card-info-border'>
        <div className="d-flex justify-content-center pb-3">
          <div className="col-8 payment-box" id='payment-info-box'>
            <div className="payment-info">
              <label>Name on Card</label>
              <input type="text" className='form-control' placeholder='Juan Alberto Rodriguez Sotelo' disabled={editCardInfo} />
            </div>
            <div className="payment-info">
              <label>Card Number</label>
              <div className="input-group" id='card-icon-input-group'>
                <input type="text" className='form-control' placeholder='1111 2222 3333 4444' disabled={editCardInfo} />
                <span className='input-group-text'>{visa}</span>
              </div>
            </div>
          </div>
          <div className="col" id='payment-info-box'>
            <div className="payment-info">
              <div className="col">
                <label>Expiration Date</label>
                <input type="text" className='form-control' placeholder='MM/YYYY' disabled={editCardInfo} />
              </div>
            </div>
            <div className="payment-info">
              <div className="col">
                <label>CVV</label>
                <input type="password" className='form-control' value={'123'} disabled={editCardInfo} />
              </div>
            </div>
          </div>
        </div>
        <div className="col border-button-edit-card pt-3">
          <div className="row justify-content-start">
            {
              editCardInfo ? (<div className="col-2 me-2"><button className="card-button__edit" onClick={() => { setEditCardInfo(false); }}>Edit Card</button></div>)
                : (<div className="col-2 me-2"><button className="card-button__save" onClick={() => { setEditCardInfo(true); }}>Save</button></div>)
            }
            <div className="col-2 me-2">
              <button className="card-button__cancel"
                onClick={() => {
                  setEditCard(true);
                  setEditCardInfo(true);
                }}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ShippingInfo = () => {
    return (
      <div className='col card-info-border' id='payment-info-box'>
        <div className="payment-info">
          <label>Address</label>
          <input type="text" className='form-control' placeholder='Col. Las Hadas 333 - 302' disabled={editAddressInfo} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="col payment-box">
            <div className="payment-info">
              <label>Town / City</label>
              <input type="text" className='form-control' placeholder='Ciudad de México' disabled={editAddressInfo} />
            </div>
          </div>
          <div className="col payment-box">
            <div className="payment-info">
              <label>State</label>
              <input type="text" className='form-control' placeholder='México' disabled={editAddressInfo} />
            </div>
          </div>
          <div className="col">
            <div className="payment-info">
              <label>Zip / Postal Code</label>
              <input type="text" className='form-control' placeholder='04920' disabled={editAddressInfo} />
            </div>
          </div>
        </div>
        <div className="payment-info pb-4" id='select-country-options'>
          <label>Country</label>
          <select className='form-select' disabled={editAddressInfo}>
            {
              northAmerica.map((country) => (
                <option value={country.id} disabled={country.disabled}>{country.country}</option>
              ))
            }
          </select>
        </div>
        <div className="col border-button-edit-card pt-3">
          <div className="row justify-content-start">
            {
              editAddressInfo ? (<div className="col-2 me-2"><button className="card-button__edit" onClick={() => { setEditAddressInfo(false); }}>Edit Info</button></div>)
                : (<div className="col-2 me-2"><button className="card-button__save" onClick={() => { setEditAddressInfo(true); }}>Save</button></div>)
            }
            <div className="col-2 me-2">
              <button className="card-button__cancel"
                onClick={() => {
                  setEditAddress(true);
                  setEditAddressInfo(true)
                }}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const MyCard = () => {
    return (
      <div className='col-12 card-info-border'>
        {
          true ? (
            <div class="row payment-info">
              <div className="col-sm-9" id='payment-info-box'>
                <div className="input-group" id='card-icon-input-group'>
                  <label className='col-sm-3 col-form-label'>My card</label>
                  <input type="text" className='form-control' placeholder='1111 2222 3333 4444' disabled />
                  <span className='input-group-text'>{visa}</span>
                </div>
              </div>
              <div className="col">
                <button className="card-button__edit" onClick={() => { setEditCard(false); }}>See Details</button>
              </div>
            </div>
          ) : (
            <div class="row payment-info">
              <div className="col-3" id='payment-info-box'>
                <div className="input-group" id='card-icon-input-group'>
                  <label className='col-form-label'>My card</label>
                </div>
              </div>
              <div className="col">
                <button className="card-button__add"><span className='me-2'>{add}</span>Add Info</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }

  const MyAddress = () => {
    return (
      <div className='col-12 card-info-border'>
        {
          true ? (
            <div class="row payment-info">
              <div className="col-sm-9" id='payment-info-box'>
                <div className="input-group" id='card-icon-input-group'>
                  <label className='col-sm-3 col-form-label'>My Addresss</label>
                  <input type="text" className='form-control' placeholder='795 Folsom Ave, Suite 600' disabled />
                  <span className='input-group-text'>{home}</span>
                </div>
              </div>
              <div className="col">
                <button className="card-button__edit" onClick={() => { setEditAddress(false); }}>See Details</button>
              </div>
            </div>
          ) : (
            <div class="row payment-info">
              <div className="col-3" id='payment-info-box'>
                <div className="input-group" id='card-icon-input-group'>
                  <label className='col-form-label'>My Addresss</label>
                </div>
              </div>
              <div className="col">
                <button className="card-button__add"><span className='me-2'>{add}</span>Add Info</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }

  return (
    <div className='container'>
      <div className="pt-2">
        <h5>Billing Information</h5>
      </div>
      <div className="pb-3">
        {editCard ? (<MyCard />) : (<CardInfo />)}
      </div>
      <br />
      <div className="pb-2 pt-4">
        <h5>Shipping Information</h5>
        <div className="pb-3">
          {editAddress ? (<MyAddress />) : (<ShippingInfo />)}
        </div>
      </div>
    </div>
  )
}

export default PaymentOptions;