import React from 'react';

const PopItems = () => {
  return (
    <section className='popular-categories'>
        <h2>Popular Categories</h2>
        <div className="popcat-grid">
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/guitar.png" alt="" />
                </div>
                Guitars
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/mixer.png" alt="" />
                </div>
                Studio & Recording
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/snare.png" alt="" />
                </div>
                Drums
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/bass.png" alt="" />
                </div>
                Bass
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/keyboard.png" alt="" />
                </div>
                Keyboards & Synth
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/live-sound.png" alt="" />
                </div>
                Live Sound
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/software.png" alt="" />
                </div>
                Software
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/mic.png" alt="" />
                </div>
                Microphones
            </a>
            <a className='popcat-item' href="/#">
                <div className="popcat-image">
                    <img src="/img/pop-cat/amps.png" alt="" />
                </div>
                Amps & Effects
            </a>
        </div>
    </section>
  )
}

export default PopItems;