import React from 'react';

const FeaturedBrands = () => {
    return (
        <section className='featured-brands'>
            <h2>Featured Brands</h2>
            <div id="indexCarouselFeaturedBrands" className="carousel carousel-dark slide text-center brands-carousel"
                data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="img/brands/zildjan.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/warwick.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/shure.png" className="brands-carousel__img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="img/brands/roland.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/marshall.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/mackie.png" className="brands-carousel__img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="img/brands/m-audio.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/ibanez.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/gibson.png" className="brands-carousel__img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="img/brands/focusrite.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/fender.png" className="brands-carousel__img" alt="..." />
                                </div>
                                <div class="col-lg-4">
                                    <img src="img/brands/daddario.png" className="brands-carousel__img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-4 brands-carousel__buttons">
                    <button className="carousel-control-prev position-relative" type="button" data-bs-target="#indexCarouselFeaturedBrands" data-bs-slide="prev">
                        <span className="button-carousel-slider carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next position-relative" type="button" data-bs-target="#indexCarouselFeaturedBrands" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeaturedBrands;