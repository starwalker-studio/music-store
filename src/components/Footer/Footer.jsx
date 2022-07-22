import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="footer-newsletter">
                <section className="container footer-newsletter__content">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="p-1">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
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

        </footer>
    )
}

export default Footer;