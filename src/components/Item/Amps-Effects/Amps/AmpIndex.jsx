import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BrandList from '../../BrandList';
import { getBassAmpCabinetCatalogByPagination, getBassAmpCabinetTableCount, getBassAmpCabinetCatalogByBrand, getBassAmpCabinetBrandList } from '../../../../redux/amps-effects/bass/bass-amp-cabinets/bass-amp-cabinet-redux';
import { getBassAmpHeadCatalogByPagination, getBassAmpHeadTableCount, getBassAmpHeadCatalogByBrand, getBassAmpHeadBrandList } from '../../../../redux/amps-effects/bass/bass-amp-heads/bass-amp-head-redux';
import { getBassComboAmpCatalogByPagination, getBassComboAmpTableCount, getBassComboAmpCatalogByBrand, getBassComboAmpBrandList } from '../../../../redux/amps-effects/bass/bass-combo-amp/bass-combo-amp-redux';
import { getGuitarAmpCabinetCatalogByPagination, getGuitarAmpCabinetTableCount, getGuitarAmpCabinetCatalogByBrand, getGuitarAmpCabinetBrandList } from '../../../../redux/amps-effects/guitar/guitar-amp-cabinets/guitar-amp-cabinet-redux';
import { getGuitarAmpHeadCatalogByPagination, getGuitarAmpHeadTableCount, getGuitarAmpHeadCatalogByBrand, getGuitarAmpHeadBrandList } from '../../../../redux/amps-effects/guitar/guitar-amp-heads/guitar-amp-head-redux';
import { getGuitarComboAmpCatalogByPagination, getGuitarComboAmpTableCount, getGuitarComboAmpCatalogByBrand, getGuitarComboAmpBrandList } from '../../../../redux/amps-effects/guitar/guitar-combo-amp/guitar-combo-amp-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { isProductCheckedByBrand, isCount, pageSize, isNextPage, displayPages, isOffsetEqualCeroOrNextpage, isNotOffsetEqualCeroOrNextpage } from '../../item-functions';
import DisplayTotalProducts from './amp-components/DisplayTotalProducts';
import ProductCardSwFN from './amp-components/ProductCardSwFN';

const AmpIndex = (props) => {
  /* props-type */
  const BASS_AMP_CABINET = "BASS_AMP_CABINET";
  const BASS_AMP_HEAD = "BASS_AMP_HEAD";
  const BASS_COMBO_AMP = "BASS_COMBO_AMP";
  const GUITAR_AMP_CABINET = "GUITAR_AMP_CABINET";
  const GUITAR_AMP_HEAD = "GUITAR_AMP_HEAD";
  const GUITAR_COMBO_AMP = "GUITAR_COMBO_AMP";

  const rightArow = <FontAwesomeIcon icon={faCaretRight} size="1x" />
  const LeftArow = <FontAwesomeIcon icon={faCaretLeft} size="1x" />
  const dispatch = useDispatch();
  /* Bass Amp Cabinet */
  const bassAmpCabinets = useSelector(store => store.bassAmpCabinetCatalog.items);
  const totalSizeCatalogbassAmpCabinet = useSelector(store => store.bassAmpCabinetCatalog.totalSizeCatalog);
  const sizeCatalogBrandbassAmpCabinet = useSelector(store => store.bassAmpCabinetCatalog.sizeCatalogByBrand);
  const bassAmpCabinetCatalogbrands = useSelector(store => store.bassAmpCabinetCatalog.brandList);
  /* Bass Amp Head */
  const bassAmpHeads = useSelector(store => store.bassAmpHeadCatalog.items);
  const totalSizeCatalogbassAmpHead = useSelector(store => store.bassAmpHeadCatalog.totalSizeCatalog);
  const sizeCatalogBrandbassAmpHead = useSelector(store => store.bassAmpHeadCatalog.sizeCatalogByBrand);
  const bassAmpHeadCatalogbrands = useSelector(store => store.bassAmpHeadCatalog.brandList);
  /* Bass Combo Amp */
  const bassComboAmp = useSelector(store => store.bassComboAmpCatalog.items);
  const totalSizeCatalogbassComboAmp = useSelector(store => store.bassComboAmpCatalog.totalSizeCatalog);
  const sizeCatalogBrandbassComboAmp = useSelector(store => store.bassComboAmpCatalog.sizeCatalogByBrand);
  const bassComboAmpCatalogbrands = useSelector(store => store.bassComboAmpCatalog.brandList);
  /* Guitar Amp Cabinet */
  const guitarAmpCabinets = useSelector(store => store.guitarAmpCabinetCatalog.items);
  const totalSizeCatalogGuitarAmpCabinets = useSelector(store => store.guitarAmpCabinetCatalog.totalSizeCatalog);
  const sizeCatalogBrandGuitarAmpCabinets = useSelector(store => store.guitarAmpCabinetCatalog.sizeCatalogByBrand);
  const guitarAmpCabinetsCatalogbrands = useSelector(store => store.guitarAmpCabinetCatalog.brandList);
  /* Guitar Amp Head */
  const guitarAmpHeads = useSelector(store => store.guitarAmpHeadCatalog.items);
  const totalSizeCatalogGuitarAmpHead = useSelector(store => store.guitarAmpHeadCatalog.totalSizeCatalog);
  const sizeCatalogBrandGuitarAmpHead = useSelector(store => store.guitarAmpHeadCatalog.sizeCatalogByBrand);
  const guitarAmpHeadCatalogbrands = useSelector(store => store.guitarAmpHeadCatalog.brandList);
  /* Guitar Combo Amp */
  const guitarComboAmp = useSelector(store => store.guitarComboAmpCatalog.items);
  const totalSizeCatalogGuitarComboAmp = useSelector(store => store.guitarComboAmpCatalog.totalSizeCatalog);
  const sizeCatalogBrandGuitarComboAmp = useSelector(store => store.guitarComboAmpCatalog.sizeCatalogByBrand);
  const guitarComboAmpCatalogbrands = useSelector(store => store.guitarComboAmpCatalog.brandList);

  const [title, setTitle] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    switch (props.type) {
      case BASS_AMP_CABINET:
        setTitle('Bass Guitar Amp Cabinet');
        dispatch(getBassAmpCabinetTableCount());
        dispatch(getBassAmpCabinetBrandList());
        if (isProductCheckedByBrand(checked)) {
          isCount(totalSizeCatalogbassAmpCabinet) && dispatch(getBassAmpCabinetCatalogByPagination(offset, limit));
          setTotalPages(pageSize(totalSizeCatalogbassAmpCabinet, limit))
        } else {
          dispatch(getBassAmpCabinetCatalogByBrand(checked));
        }
        break;
      case BASS_AMP_HEAD:
        setTitle('Bass Guitar Amp Head');
        dispatch(getBassAmpHeadTableCount());
        dispatch(getBassAmpHeadBrandList());
        if (isProductCheckedByBrand(checked)) {
          isCount(totalSizeCatalogbassAmpHead) && dispatch(getBassAmpHeadCatalogByPagination(offset, limit));
          setTotalPages(pageSize(totalSizeCatalogbassAmpHead, limit))
        } else {
          dispatch(getBassAmpHeadCatalogByBrand(checked));
        }
        break;
      case BASS_COMBO_AMP:
        setTitle('Bass Guitar Combo Amp');
        dispatch(getBassComboAmpTableCount());
        dispatch(getBassComboAmpBrandList());
        if (isProductCheckedByBrand(checked)) {
          isCount(totalSizeCatalogbassComboAmp) && dispatch(getBassComboAmpCatalogByPagination(offset, limit));
          setTotalPages(pageSize(totalSizeCatalogbassComboAmp, limit))
        } else {
          dispatch(getBassComboAmpCatalogByBrand(checked));
        }
        break;
      case GUITAR_AMP_CABINET:
        setTitle('Guitar Amp Cabinet');
        dispatch(getGuitarAmpCabinetTableCount());
        dispatch(getGuitarAmpCabinetBrandList());
        if (isProductCheckedByBrand(checked)) {
          isCount(totalSizeCatalogGuitarAmpCabinets) && dispatch(getGuitarAmpCabinetCatalogByPagination(offset, limit));
          setTotalPages(pageSize(totalSizeCatalogGuitarAmpCabinets, limit))
        } else {
          dispatch(getGuitarAmpCabinetCatalogByBrand(checked));
        }
        break;
      case GUITAR_AMP_HEAD:
        setTitle('Guitar Amp Head');
        dispatch(getGuitarAmpHeadTableCount());
        dispatch(getGuitarAmpHeadBrandList());
        if (isProductCheckedByBrand(checked)) {
          isCount(totalSizeCatalogGuitarAmpHead) && dispatch(getGuitarAmpHeadCatalogByPagination(offset, limit));
          setTotalPages(pageSize(totalSizeCatalogGuitarAmpHead, limit))
        } else {
          dispatch(getGuitarAmpHeadCatalogByBrand(checked));
        }
        break;
      case GUITAR_COMBO_AMP:
        setTitle('Guitar Combo Amp');
        dispatch(getGuitarComboAmpTableCount());
        dispatch(getGuitarComboAmpBrandList());
        if (isProductCheckedByBrand(checked)) {
          isCount(totalSizeCatalogGuitarComboAmp) && dispatch(getGuitarComboAmpCatalogByPagination(offset, limit));
          setTotalPages(pageSize(totalSizeCatalogGuitarComboAmp, limit))
        } else {
          dispatch(getGuitarComboAmpCatalogByBrand(checked));
        }
        break;
      default:
        break;
    }
  }, [checked, totalSizeCatalogbassAmpCabinet, totalSizeCatalogbassAmpHead, totalSizeCatalogbassComboAmp,
    totalSizeCatalogGuitarAmpCabinets, totalSizeCatalogGuitarAmpHead, totalSizeCatalogGuitarComboAmp,
    offset, limit, dispatch, props]);

  const PaginationButtonsTop = () => {
    return (
      <div className='result-option__pagination'>
        <button className={isOffsetEqualCeroOrNextpage(offset, totalPages) ? ('btn-search-result-bar__disabled ms-3') : ('btn-search-result-bar__top ms-3')}
          onClick={() => { !isNextPage(offset, totalPages) && setOffset(offset - 1); }}
          disabled={isOffsetEqualCeroOrNextpage(offset, totalPages)}>{LeftArow}</button>

        <span className='ms-3 me-3'>{displayPages(offset, totalPages)}</span>

        <button className={!isNextPage(offset, totalPages) ? ('btn-search-result-bar__disabled me-3') : ('btn-search-result-bar__top me-3')}
          onClick={() => { isNextPage(offset, totalPages) && setOffset(offset + 1); }}
          disabled={!isNextPage(offset, totalPages)}>{rightArow}</button>
      </div>
    )
  }

  const PaginationButtonsBottom = () => {
    return (
      <div>
        <button className='btn-search-result-bar__bottom ms-2 me-2'
          onClick={() => { isNotOffsetEqualCeroOrNextpage(offset, totalPages) && setOffset(offset - 1); }}
          hidden={isOffsetEqualCeroOrNextpage(offset, totalPages)}>{LeftArow}</button>
        <PageButton />
        <button className='btn-search-result-bar__bottom ms-2 me-2'
          onClick={() => { isNextPage(offset, totalPages) && setOffset(offset + 1); }}
          hidden={!isNextPage(offset, totalPages)}>{rightArow}</button>
      </div>
    )
  }

  const PageButton = () => {
    let display = [];
    let pages = totalPages + 1
    for (let i = 1; i < pages; i++) {
      display.push(<button className={offset === i - 1 ? ('btn-search-result-bar__bottom-selected ms-2 me-2') : ('btn-search-result-bar__bottom ms-2 me-2')}
        key={i} onClick={() => { setOffset(--i); }}
        disabled={offset === i - 1}>{i}</button>);
    }
    return display;
  }

  const BrandListCase = () => {
    switch (props.type) {
      case BASS_AMP_CABINET:
        return (<BrandList brands={bassAmpCabinetCatalogbrands} checked={checked} sendChecked={e => setChecked(e)} />)
      case BASS_AMP_HEAD:
        return (<BrandList brands={bassAmpHeadCatalogbrands} checked={checked} sendChecked={e => setChecked(e)} />)
      case BASS_COMBO_AMP:
        return (<BrandList brands={bassComboAmpCatalogbrands} checked={checked} sendChecked={e => setChecked(e)} />)
      case GUITAR_AMP_CABINET:
        return (<BrandList brands={guitarAmpCabinetsCatalogbrands} checked={checked} sendChecked={e => setChecked(e)} />)
      case GUITAR_AMP_HEAD:
        return (<BrandList brands={guitarAmpHeadCatalogbrands} checked={checked} sendChecked={e => setChecked(e)} />)
      case GUITAR_COMBO_AMP:
        return (<BrandList brands={guitarComboAmpCatalogbrands} checked={checked} sendChecked={e => setChecked(e)} />)
      default:
        break;
    }
  }

  return (
    <div className="content-flex item-page">
      <div className="item-header" id="header">
        <p>{title}</p>
      </div>
      <div className="d-flex">
        <div className="brand-list-section">
          <BrandListCase />
        </div>
        <div>
          <div className="products">
            <div className='result-option result-option__top'>
              <div className="result-option__total">
                <DisplayTotalProducts type={props.type} checked={checked}
                  totalSizeBassAmpCabinetCatalog={totalSizeCatalogbassAmpCabinet}
                  listSizeBrandBassAmpCabinet={sizeCatalogBrandbassAmpCabinet}
                  totalSizeBassAmpHeadCatalog={totalSizeCatalogbassAmpHead}
                  listSizeBrandBassAmpHead={sizeCatalogBrandbassAmpHead}
                  totalSizeBassComboAmpCatalog={totalSizeCatalogbassComboAmp}
                  listSizeBrandBassComboAmp={sizeCatalogBrandbassComboAmp}
                  totalSizeGuitarAmpCabinetCatalog={totalSizeCatalogGuitarAmpCabinets}
                  listSizeBrandGuitarAmpCabinet={sizeCatalogBrandGuitarAmpCabinets}
                  totalSizeGuitarAmpHeadCatalog={totalSizeCatalogGuitarAmpHead}
                  listSizeBrandGuitarAmpHead={sizeCatalogBrandGuitarAmpHead}
                  totalSizeGuitarComboAmpCatalog={totalSizeCatalogGuitarComboAmp}
                  listSizeBrandGuitarComboAmp={sizeCatalogBrandGuitarComboAmp} />
              </div>
              {isProductCheckedByBrand(checked) && (<PaginationButtonsTop />)}
            </div>
            <ProductCardSwFN type={props.type}
              bassAmpCabinets={bassAmpCabinets} bassAmpHeads={bassAmpHeads} bassComboAmp={bassComboAmp}
              guitarAmpCabinets={guitarAmpCabinets} guitarAmpHeads={guitarAmpHeads} guitarComboAmp={guitarComboAmp} />
            <div className='result-option result-option__bottom'>
              <div className='result-option__pagination-bottom'>
                {isProductCheckedByBrand(checked) && (<PaginationButtonsBottom />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmpIndex;