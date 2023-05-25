import React from 'react';
import Slider from '../Slider/Slider';
import Ads from './Ads/Ads';
import PopItems from './Popular-Items/PopItems';
import FeaturedBrands from './Featured-Brands/FeaturedBrands';

const Index = () => {
    return (
        <div className='container'>
            <Slider />
            <Ads />
            <PopItems />
            <FeaturedBrands />
        </div>
    )
}

export default Index;
