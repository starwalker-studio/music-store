import React from 'react';
import { isProductCheckedByBrand } from '../../../item-functions';

const DisplayTotalProducts = (props) => {

    const BASS_AMP_CABINET = "BASS_AMP_CABINET";
    const BASS_AMP_HEAD = "BASS_AMP_HEAD";
    const BASS_COMBO_AMP = "BASS_COMBO_AMP";
    const GUITAR_AMP_CABINET = "GUITAR_AMP_CABINET";
    const GUITAR_AMP_HEAD = "GUITAR_AMP_HEAD";
    const GUITAR_COMBO_AMP = "GUITAR_COMBO_AMP";

    switch (props.type) {
        case BASS_AMP_CABINET:
            if (isProductCheckedByBrand(props.checked)) {
                return (<span>{`${props.totalSizeBassAmpCabinetCatalog} Products`}</span>)
            } else {
                return (<span>{`${props.listSizeBrandBassAmpCabinet} Products`}</span>)
            }
        case BASS_AMP_HEAD:
            if (isProductCheckedByBrand(props.checked)) {
                return (<span>{`${props.totalSizeBassAmpHeadCatalog} Products`}</span>)
            } else {
                return (<span>{`${props.listSizeBrandBassAmpHead} Products`}</span>)
            }
        case BASS_COMBO_AMP:
            if (isProductCheckedByBrand(props.checked)) {
                return (<span>{`${props.totalSizeBassComboAmpCatalog} Products`}</span>)
            } else {
                return (<span>{`${props.listSizeBrandBassComboAmp} Products`}</span>)
            }
        case GUITAR_AMP_CABINET:
            if (isProductCheckedByBrand(props.checked)) {
                return (<span>{`${props.totalSizeGuitarAmpCabinetCatalog} Products`}</span>)
            } else {
                return (<span>{`${props.listSizeBrandGuitarAmpCabinet} Products`}</span>)
            }
        case GUITAR_AMP_HEAD:
            if (isProductCheckedByBrand(props.checked)) {
                return (<span>{`${props.totalSizeGuitarAmpHeadCatalog} Products`}</span>)
            } else {
                return (<span>{`${props.listSizeBrandGuitarAmpHead} Products`}</span>)
            }
        case GUITAR_COMBO_AMP:
            if (isProductCheckedByBrand(props.checked)) {
                return (<span>{`${props.totalSizeGuitarComboAmpCatalog} Products`}</span>)
            } else {
                return (<span>{`${props.listSizeBrandGuitarComboAmp} Products`}</span>)
            }
        default:
            break;
    }
}

export default DisplayTotalProducts;