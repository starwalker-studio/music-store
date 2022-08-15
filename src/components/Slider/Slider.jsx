import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <div id="indexCarouselItems" className="carousel carousel-dark slide"
                data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner text-button">
                    <div className="carousel-item active text-center">
                        <img src="/img/index/index-1.png" className="d-block w-100" alt="..." />
                            <button type="button" 
                                    className="text-button__slide-1"
                                    onClick={()=>{
                                        window.location = '/create_account';
                                    }}>Get Started</button>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/index/index-2.png" className="d-block w-100" alt="..." />
                        <button className="text-button__slide-2">Get Details</button>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/index/index-3.png" className="d-block w-100" alt="..." />
                        <button className="text-button__slide-3">Shop Now</button>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#indexCarouselItems" data-bs-slide="prev">
                    <span className="button-carousel-slider carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#indexCarouselItems" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider;
