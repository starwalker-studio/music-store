import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {

    const [img, setImg] = useState(1);
    const [mobile, setMobile] = useState(false);
    const right = <FontAwesomeIcon icon={faAngleRight} />
    const left = <FontAwesomeIcon icon={faAngleLeft} />

    const mobileAdjust = () => {
        if (window.innerWidth <= 760) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    window.addEventListener('resize', mobileAdjust);

    useEffect(() => {
        window.setInterval(() => {
            setImg(img => img + 1);
        }, 10000);
    }, []);

    img === 5 && setImg(1);

    img <= 0 && setImg(1);

    const FirstText = () => {
        switch (img) {
            case 1:
                return <p className={mobile ? 'fs-5 text-top-index mb-3' : 'display-3 text-top-index mb-3'}>Welcome to the world of music</p>;
            case 2:
                return <p className={mobile ? 'fs-5 text-top-index mb-3' : 'display-3 text-top-index mb-3'}>The best audio live performance</p>;
            case 3:
                return <p className={mobile ? 'fs-5 text-top-index mb-3' : 'display-3 text-top-index mb-3'}>Make your home a profesional studio</p>;
            case 4:
                return <p className={mobile ? 'fs-5 text-top-index mb-3' : 'display-3 text-top-index mb-3'}>Instruments and equipments</p>;
            default:
                break;
        }
    }

    const SecondText = () => {
        switch (img) {
            case 1:
                return <p className={mobile ? 'fw-light mb-5' : 'fw-light fs-3 mb-5'}>Visit our store and begin with your carrer</p>;
            case 2:
                return <p className={mobile ? 'fw-light mb-5' : 'fw-light fs-3 mb-5'}>Do your events with profesional audio</p>;
            case 3:
                return <p className={mobile ? 'fw-light mb-5' : 'fw-light fs-3 mb-5'}>Interfaces, controllers and more.</p>;
            case 4:
                return <p className={mobile ? 'fw-light mb-5' : 'fw-light fs-3 mb-5'}>Be a dream rockstar</p>;
            default:
                break;
        }
    }

    return (
        <div>
            <div className="image-background-index" style={{ backgroundImage: `url(/img/index/index-${img}.png)` }}>
                <div className="d-flex justify-content-center">
                    <div className="col text-start button-margin-slider">
                        <button className="button-slide-style" onClick={() => setImg(img - 1)}>{left}</button>
                    </div>
                    <div className={mobile ? 'col' : 'col-8 align-self-center'}>
                        <FirstText />
                        <SecondText />
                        <div className="text-center">
                            <button className="text-bottom-index">Get Started</button>
                        </div>
                    </div>
                    <div className="col text-end button-margin-slider">
                        <button className="button-slide-style" onClick={() => setImg(img + 1)}>{right}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;
