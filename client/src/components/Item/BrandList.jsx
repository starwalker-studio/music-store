import React from 'react';
import { handleToggle } from '../Item/item-functions';

const BrandList = (props) => {

    return (
        <div>
            <div className="item-brand-title">
                <h4>Brand</h4>
            </div>
            <div className="item-brand-list">
                {
                    props.brands.map(item => (
                        <div className='brand-checkbox-name__link' key={item.id}>
                            <div className="check-item-brand">
                                <label>
                                    <input className="check-input-brand me-2" type="checkbox"
                                        checked={props.checked.indexOf(item.id) === -1 ? false : true}
                                        onChange={() => { props.sendChecked(handleToggle(item.id, props.checked)) }} />
                                    {item.brand}
                                </label>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BrandList;