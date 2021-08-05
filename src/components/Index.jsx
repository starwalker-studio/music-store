import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/index-style.css';


const Index = () => {
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
    return (
        <div>
            <div className="image-background-index" style={{ backgroundImage: `url(/img/index/index-${img}.png)` }}>
                <div className="d-flex justify-content-center">
                    <div className="col text-start button-margin-slider">
                        <button className="button-slide-style">{left}</button>
                    </div>
                    <div className={mobile ? 'col' : 'col-8 align-self-center'}>
                        <p className={mobile ? 'fs-5 text-top-index mb-3' : 'display-3 text-top-index mb-3'}>Welcome to the world of music</p>
                        <p className={mobile ? 'fw-light mb-5' : 'fw-light fs-3 mb-5'}>Begin with your performance with the best audio equipment and instruments</p>
                        <div className="text-center">
                            <button className="text-bottom-index">Get Started</button>
                        </div>
                    </div>
                    <div className="col text-end button-margin-slider">
                        <button className="button-slide-style">{right}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
