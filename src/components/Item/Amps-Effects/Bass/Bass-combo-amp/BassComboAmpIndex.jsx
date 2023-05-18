import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../ProductCard';
import BrandList from '../../../BrandList';
import { getBassComboAmpCatalogByPagination, getBassComboAmpTableCount, getBassComboAmpCatalogByBrand, getBassComboAmpBrandsByIds } from '../../../../../redux/amps-effects/bass/bass-combo-amp/bass-combo-amp-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { isProductCheckedByBrand, isCount, pageSize, isNextPage, displayPages } from '../../../item-functions';

const BassComboAmpIndex = () => {
    const rightArow = <FontAwesomeIcon icon={faCaretRight} size="1x" />
    const LeftArow = <FontAwesomeIcon icon={faCaretLeft} size="1x" />
    const dispatch = useDispatch();
    const bassComboAmp = useSelector(store => store.bassComboAmpCatalog.items);
    const totalSizeCatalog = useSelector(store => store.bassComboAmpCatalog.totalSizeCatalog);
    const sizeCatalogBrand = useSelector(store => store.bassComboAmpCatalog.sizeCatalogByBrand);
    const brands = useSelector(store => store.bassComboAmpCatalog.brands);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [checked, setChecked] = useState([]);
    const [brandIds] = useState([1, 3, 4, 5, 7]);

    useEffect(() => {
        dispatch(getBassComboAmpBrandsByIds(brandIds));
        dispatch(getBassComboAmpTableCount());
        if (isProductCheckedByBrand(checked)) {
          isCount(totalSizeCatalog) && dispatch(getBassComboAmpCatalogByPagination(offset, limit));
          setTotalPages(pageSize(totalSizeCatalog, limit))
        } else {
          dispatch(getBassComboAmpCatalogByBrand(checked));
        }
      }, [checked, brandIds, sizeCatalogBrand, totalSizeCatalog, offset, limit, dispatch]);

      const PaginationButtonsTop = () => {
        return (
          <div className='result-option__pagination'>
            <button className={isNextPage(offset, totalPages) || offset === 0 ? ('btn-search-result-bar__disabled ms-3') : ('btn-search-result-bar__top ms-3')}
              onClick={() => { !isNextPage(offset, totalPages) && setOffset(offset - 1); }}
              disabled={isNextPage(offset, totalPages) || offset === 0}>{LeftArow}</button>
    
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
              onClick={() => { !isNextPage(offset, totalPages) || offset === 0 && setOffset(offset - 1); }}
              hidden={isNextPage(offset, totalPages) || offset === 0}>{LeftArow}</button>
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
    
      const DisplayTotalProducts = () => {
        if (isProductCheckedByBrand(checked)) {
          return (<span>{`${totalSizeCatalog} Products`}</span>)
        } else {
          return (<span>{`${sizeCatalogBrand} Products`}</span>)
        }
      }

      return (
        <div className="content-flex item-page">
      <div className="item-header" id="header">
        <p>Bass Guitar Combo Amp</p>
      </div>
      <div className="d-flex">
        <div className="brand-list-section">
          <BrandList brands={brands} checked={checked} sendChecked={e => setChecked(e)}/>
        </div>
        <div>
          <div className="products">
            <div className='result-option result-option__top'>
              <div className="result-option__total">
                <DisplayTotalProducts />
              </div>
              {isProductCheckedByBrand(checked) && (<PaginationButtonsTop />)}
            </div>
            <ProductCard catalog={bassComboAmp}/>
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

export default BassComboAmpIndex;