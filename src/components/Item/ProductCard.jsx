import React from 'react';
import { getDecimalPrice, setComaToPrice } from '../Item/item-functions';

const ProductCard = (props) => {
    return (
        props.catalog.map(item => (
            <div className='product-card' key={item.id}>
                <div className="product-card__img">
                    <img src={item.img} className="img-fluid"
                        alt="" sizes='(min-width: 1440px) 215px, 140px' />
                </div>
                <div className="product-card__info">
                    <h2 className="product-card__name">{item.model}</h2>
                    <span className="product-card__desc">{item.description}</span>
                    <em className="product-card__price">
                        <div className="product-card__finalrow">
                            <strong className="product-card__amount"><b>$</b>{setComaToPrice(item.price)}<b>{"." + getDecimalPrice(item.price)}</b></strong><small></small>
                        </div>
                    </em>
                </div>
            </div>
        ))
    )
}

export default ProductCard;