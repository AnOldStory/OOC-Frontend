import React from 'react';
import { Slide } from 'react-slideshow-image';
import jiyoungkim from './jiyoungkim.jpg'
import avengers from './avengers.jpg'
import './Slide.css'

const proprietes={
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={jiyoungkim} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={avengers} alt="img2" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;