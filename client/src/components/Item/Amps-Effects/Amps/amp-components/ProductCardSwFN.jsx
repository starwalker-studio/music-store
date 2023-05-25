import React from 'react';
import ProductCard from '../../../ProductCard';

const ProductCardSwFN = (props) => {

    const BASS_AMP_CABINET = "BASS_AMP_CABINET";
    const BASS_AMP_HEAD = "BASS_AMP_HEAD";
    const BASS_COMBO_AMP = "BASS_COMBO_AMP";
    const GUITAR_AMP_CABINET = "GUITAR_AMP_CABINET";
    const GUITAR_AMP_HEAD = "GUITAR_AMP_HEAD";
    const GUITAR_COMBO_AMP = "GUITAR_COMBO_AMP";

    switch (props.type) {
        case BASS_AMP_CABINET:
            return (<ProductCard catalog={props.bassAmpCabinets} />)
        case BASS_AMP_HEAD:
            return (<ProductCard catalog={props.bassAmpHeads} />)
        case BASS_COMBO_AMP:
            return (<ProductCard catalog={props.bassComboAmp} />)
        case GUITAR_AMP_CABINET:
            return (<ProductCard catalog={props.guitarAmpCabinets} />)
        case GUITAR_AMP_HEAD:
            return (<ProductCard catalog={props.guitarAmpHeads} />)
        case GUITAR_COMBO_AMP:
            return (<ProductCard catalog={props.guitarComboAmp} />)
        default:
            break;
    }
}

export default ProductCardSwFN;