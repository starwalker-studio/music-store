import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Ads = () => {

    const guitar = <FontAwesomeIcon icon={faGuitar} size="3x" />
    const truck = <FontAwesomeIcon icon={faTruck} size="2x" />
    const headset = <FontAwesomeIcon icon={faHeadset} size="2x" />
    const creditCard = <FontAwesomeIcon icon={faCreditCard} size="2x" />

    return (
        <section className='value-ads'>
            <h2 className='fst-normal'>Get More at Wave Store</h2>
            <div className='value-ads__links'>
                <a href="">
                    <div className="value-ads__icon">
                        <span>{guitar}</span>
                    </div>
                    <div className="value-ads__title">Guitar Inspection</div>
                    <div className="value-ads__subtitle">
                        Guitar perfection
                        <span>right out of the box.</span>
                    </div>
                    <div className="value-ads__cta">Learn More</div>
                </a>
                <a href="">
                    <div className="value-ads__icon">
                        <span>{truck}</span>
                    </div>
                    <div className="value-ads__title">Fast, FREE Shipping</div>
                    <div className="value-ads__subtitle">Even on the small stuff.</div>
                    <div className="value-ads__cta">Learn More</div>
                </a>
                <a href="">
                    <div className="value-ads__icon">
                        <span>{headset}</span>
                    </div>
                    <div className="value-ads__title">FREE Tech Support</div>
                    <div className="value-ads__subtitle">
                        Got a question?
                        <span>We're here to help</span>
                    </div>
                    <div className="value-ads__cta">Learn More</div>
                </a>
                <a href="">
                    <div className="value-ads__icon">
                        <span>{creditCard}</span>
                    </div>
                    <div className="value-ads__title">Easy Payments</div>
                    <div className="value-ads__subtitle">Up to 48 Months.</div>
                    <div className="value-ads__cta">Learn More</div>
                </a>
            </div>
        </section>
    )
}

export default Ads;