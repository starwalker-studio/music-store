import React from 'react';
import { bassAmpCabinets } from '../../../dummy/bass-amp/bass-amp-cabinets';
import { bassAmpHeads } from '../../../dummy/bass-amp/bass-amp-heads';
import { guitarAmpCabinets } from '../../../dummy/guitar-amp/guitar-amp-cabinets';
import { guitarAmpHeads } from '../../../dummy/guitar-amp/guitar-amp-heads';
import { guitarComboAmps } from '../../../dummy/guitar-amp/guitar-combo-amps';

const AmpCatalog = () => {
    return (
        <div>
            <div className="products">
                {
                    bassAmpCabinets.map(item => (
                        <div className='product-card' key={item.img}>
                            <div className="product-card__img">
                                <img src={item.img} className="img-fluid" 
                                    alt="" sizes='(min-width: 1440px) 215px, 140px' />
                            </div>
                            <div className="product-card__info">
                                <h2 className="product-card__name">Lorem ipsum dolor sit amet</h2>
                                <span className="product-card__desc">Duis ultricies lacus sed turpis tincidunt id aliquet. Commodo ullamcorper a lacus vestibulum sed. Morbi leo urna molestie at.</span>
                                <em className="product-card__price">
                                    <div className="product-card__finalrow">
                                        <strong className="product-card__amount"><b>$</b>000<b>.00</b></strong><small></small>
                                    </div>
                                </em>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="products">
                {
                    bassAmpHeads.map(item => (
                        <div className='product-card' key={item.img}>
                            <div className="product-card__img">
                                <img src={item.img} className="img-fluid"
                                    alt="" sizes='(min-width: 1440px) 215px, 140px' />
                            </div>
                            <div className="product-card__info">
                                <h2 className="product-card__name">Lorem ipsum dolor sit amet</h2>
                                <span className="product-card__desc">Duis ultricies lacus sed turpis tincidunt id aliquet. Commodo ullamcorper a lacus vestibulum sed. Morbi leo urna molestie at.</span>
                                <em className="product-card__price">
                                    <div className="product-card__finalrow">
                                        <strong className="product-card__amount"><b>$</b>000<b>.00</b></strong><small></small>
                                    </div>
                                </em>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="products">
                {
                    guitarAmpCabinets.map(item => (
                        <div className='product-card' key={item.img}>
                            <div className="product-card__img">
                                <img src={item.img} className="img-fluid"
                                    alt="" sizes='(min-width: 1440px) 215px, 140px' />
                            </div>
                            <div className="product-card__info">
                                <h2 className="product-card__name">Lorem ipsum dolor sit amet</h2>
                                <span className="product-card__desc">Duis ultricies lacus sed turpis tincidunt id aliquet. Commodo ullamcorper a lacus vestibulum sed. Morbi leo urna molestie at.</span>
                                <em className="product-card__price">
                                    <div className="product-card__finalrow">
                                        <strong className="product-card__amount"><b>$</b>000<b>.00</b></strong><small></small>
                                    </div>
                                </em>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="products">
                {
                    guitarAmpHeads.map(item => (
                        <div className='product-card' key={item.img}>
                            <div className="product-card__img">
                                <img src={item.img} className="img-fluid"
                                    alt="" sizes='(min-width: 1440px) 215px, 140px' />
                            </div>
                            <div className="product-card__info">
                                <h2 className="product-card__name">Lorem ipsum dolor sit amet</h2>
                                <span className="product-card__desc">Duis ultricies lacus sed turpis tincidunt id aliquet. Commodo ullamcorper a lacus vestibulum sed. Morbi leo urna molestie at.</span>
                                <em className="product-card__price">
                                    <div className="product-card__finalrow">
                                        <strong className="product-card__amount"><b>$</b>000<b>.00</b></strong><small></small>
                                    </div>
                                </em>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="products">
                {
                    guitarComboAmps.map(item => (
                        <div className='product-card' key={item.img}>
                            <div className="product-card__img">
                                <img src={item.img} className="img-fluid"
                                    alt="" sizes='(min-width: 1440px) 215px, 140px' />
                            </div>
                            <div className="product-card__info">
                                <h2 className="product-card__name">Lorem ipsum dolor sit amet</h2>
                                <span className="product-card__desc">Duis ultricies lacus sed turpis tincidunt id aliquet. Commodo ullamcorper a lacus vestibulum sed. Morbi leo urna molestie at.</span>
                                <em className="product-card__price">
                                    <div className="product-card__finalrow">
                                        <strong className="product-card__amount"><b>$</b>000<b>.00</b></strong><small></small>
                                    </div>
                                </em>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AmpCatalog;