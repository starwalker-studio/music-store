import React from 'react';
import Slider from '../Slider/Slider';
import Ads from '../Index/Ads/Ads';
import PopItems from '../Index/Popular-Items/PopItems';

const Index = () => {
    return (
        <div className='container'>
            <Slider />
            <Ads />
            <PopItems />
        </div>
    )
}

export default Index;
