import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook} size="2x" />
    const twitter = <FontAwesomeIcon icon={faTwitter} size="2x" />
    const instagram = <FontAwesomeIcon icon={faInstagram} size="2x" />
    const google = <FontAwesomeIcon icon={faGoogle} size="2x" />
    return (
        <footer className="text-center">
            <div className="footer-newsletter">
                <section className="container footer-newsletter__content">
                    <form action="">
                        <h5 className='p-1'>Sign up now for great deals</h5>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5 col-12">
                                <div className="input-group">
                                    <input type="email" id="form5Example27" className="form-control" placeholder='Enter your email address' />
                                    <button className="newsletter-suscribe-button"
                                        type="button" id="suscribe-newsletter">Suscribe</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <div className="social-media">
                <section className="social-media__content">
                    <div className="social-media__content__title">Follow us:</div>
                    <a className="social-media-btn" href="#!" role="button">
                        {facebook}
                    </a>
                    <a className="social-media-btn" href="#!" role="button">
                        {twitter}
                    </a>
                    <a className="social-media-btn" href="#!" role="button">
                        {instagram}
                    </a>
                    <a className="social-media-btn" href="#!" role="button">
                        {google}
                    </a>
                </section>
            </div>
            <section className='footer-links'>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Footer Content</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">Links</h5>
                            <ul className="">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright - Wave Store
                </div>
            </section>
        </footer>
    )
}

export default Footer;