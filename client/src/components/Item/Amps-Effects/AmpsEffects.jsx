import React from 'react';
import CatalogLinkList from './Catalog-link-list/CatalogLinkList';
import AmpCatalog from './AmpCatalog';

const AmpsEffects = () => {
  return (
    <div className="content-flex item-page">
      <div className="item-header" id="header">
        <p>Amps & Effects</p>
      </div>
      <div className="d-flex">
        <div className="item-category-section">
          <CatalogLinkList />
        </div>
        <div>
          <AmpCatalog />
        </div>
      </div>
    </div >
  )
}

export default AmpsEffects;