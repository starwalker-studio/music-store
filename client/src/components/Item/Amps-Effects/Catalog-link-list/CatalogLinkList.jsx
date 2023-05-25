import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CatalogLinkList = () => {
    const [guitarComboAmpLinkMouse, setGuitarComboAmpLinkMouse] = useState(false);
    const [guitarAmpHeadLinkMouse, setGuitarAmpHeadLinkMouse] = useState(false);
    const [guitarAmpCabinetLinkMouse, setGuitarAmpCabinetLinkMouse] = useState(false);
    const [bassComboAmpLinkMouse, setBassComboAmpLinkMouse] = useState(false);
    const [bassAmpHeadLinkMouse, setBassAmpHeadLinkMouse] = useState(false);
    const [bassAmpCabinetLinkMouse, setBassAmpCabinetLinkMouse] = useState(false);
    const arrowRight = <FontAwesomeIcon icon={faChevronRight} />
    const displayBlock = { display: 'block' }
    const displayNone = { display: 'none' }
    return (
        <div>
            <div className="item-category-title">
                <h4>Shop by category</h4>
            </div>
            <div className="item-category-list">
                <div className='item-nav'>
                    <NavLink className='item-nav__link' to="/shop/amps-effects/guitar-combo-amp"
                        onMouseEnter={() => { setGuitarComboAmpLinkMouse(true) }} onMouseLeave={() => { setGuitarComboAmpLinkMouse(false) }}>
                        Guitar Combo Amps
                        <span className='item-nav__arrow'>{arrowRight}</span>
                    </NavLink>
                    <div className="dropdown-content" onMouseEnter={() => { setGuitarComboAmpLinkMouse(true) }} onMouseLeave={() => { setGuitarComboAmpLinkMouse(false) }}
                        style={guitarComboAmpLinkMouse ? displayBlock : displayNone} id="item-link-menu">
                        <NavLink className="dropdown-content__link-item" to="">Fender</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Vox</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Orange</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Marshall</NavLink>
                    </div>
                </div>
                <div className='item-nav'>
                    <NavLink className='item-nav__link' to="/shop/amps-effects/guitar-amp-heads"
                        onMouseEnter={() => { setGuitarAmpHeadLinkMouse(true) }} onMouseLeave={() => { setGuitarAmpHeadLinkMouse(false) }}>
                        Guitar Amp Heads
                        <span className='item-nav__arrow'>{arrowRight}</span>
                    </NavLink>
                    <div className="dropdown-content" onMouseEnter={() => { setGuitarAmpHeadLinkMouse(true) }} onMouseLeave={() => { setGuitarAmpHeadLinkMouse(false) }}
                        style={guitarAmpHeadLinkMouse ? displayBlock : displayNone}>
                        <NavLink className="dropdown-content__link-item" to="">Marshall</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Orange</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Peavey</NavLink>
                    </div>
                </div>
                <div className='item-nav'>
                    <NavLink className='item-nav__link' to="/shop/amps-effects/guitar-amp-cabinets"
                        onMouseEnter={() => { setGuitarAmpCabinetLinkMouse(true) }} onMouseLeave={() => { setGuitarAmpCabinetLinkMouse(false) }}>
                        Guitar Amp Cabinets
                        <span className='item-nav__arrow'>{arrowRight}</span>
                    </NavLink>
                    <div className="dropdown-content" onMouseEnter={() => { setGuitarAmpCabinetLinkMouse(true) }} onMouseLeave={() => { setGuitarAmpCabinetLinkMouse(false) }}
                        style={guitarAmpCabinetLinkMouse ? displayBlock : displayNone}>
                        <NavLink className="dropdown-content__link-item" to="">Marshall</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Orange</NavLink>
                    </div>
                </div>
                <div className='item-nav'>
                    <NavLink className='item-nav__link' to="/shop/amps-effects/bass-combo-amp"
                        onMouseEnter={() => { setBassComboAmpLinkMouse(true) }} onMouseLeave={() => { setBassComboAmpLinkMouse(false) }}>
                        Bass Combo Amps
                        <span className='item-nav__arrow'>{arrowRight}</span>
                    </NavLink>
                    <div className="dropdown-content" onMouseEnter={() => { setBassComboAmpLinkMouse(true) }} onMouseLeave={() => { setBassComboAmpLinkMouse(false) }}
                        style={bassComboAmpLinkMouse ? displayBlock : displayNone}>
                        <NavLink className="dropdown-content__link-item" to="">Gallien-Krueger</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Fender</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Hartke</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Orange</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Ampeg</NavLink>
                    </div>
                </div>
                <div className='item-nav'>
                    <NavLink className='item-nav__link' to="/shop/amps-effects/bass-amp-heads"
                        onMouseEnter={() => { setBassAmpHeadLinkMouse(true) }} onMouseLeave={() => { setBassAmpHeadLinkMouse(false) }}>
                        Bass Amp Heads<span className='item-nav__arrow'>{arrowRight}</span>
                    </NavLink>
                    <div className="dropdown-content" onMouseEnter={() => { setBassAmpHeadLinkMouse(true) }} onMouseLeave={() => { setBassAmpHeadLinkMouse(false) }}
                        style={bassAmpHeadLinkMouse ? displayBlock : displayNone}>
                        <NavLink className="dropdown-content__link-item" to="">Ampeg</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Gallien-Krueger</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Darkglass</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Hartke</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Orange</NavLink>
                    </div>
                </div>
                <div className='item-nav'>
                    <NavLink className='item-nav__link' to="/shop/amps-effects/bass-amp-cabinets"
                        onMouseEnter={() => { setBassAmpCabinetLinkMouse(true) }} onMouseLeave={() => { setBassAmpCabinetLinkMouse(false) }}>
                        Bass Amp Capinets<span className='item-nav__arrow'>{arrowRight}</span>
                    </NavLink>
                    <div className="dropdown-content" onMouseEnter={() => { setBassAmpCabinetLinkMouse(true) }} onMouseLeave={() => { setBassAmpCabinetLinkMouse(false) }}
                        style={bassAmpCabinetLinkMouse ? displayBlock : displayNone}>
                        <NavLink className="dropdown-content__link-item" to="">Ampeg</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Fender</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Hartke</NavLink>
                        <NavLink className="dropdown-content__link-item" to="">Orange</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogLinkList;