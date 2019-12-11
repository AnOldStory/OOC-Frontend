import React from "react";
import { Fade } from "react-slideshow-image";
import jiyoungkim from "./jiyoungkim.jpg";
import jiyoung from "./jiyoung.jpg";
import avengers from "./avengers.jpg";
import avengers2 from "./avengers2.jpg";
import last from "./last.jpg";
import hello from "./hello.png";
import inter from "./inter.jpg";
import hamdo from "./hamdo.jpg";
import "./Slide.css";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Fade {...proprietes}>
        <div className="each-slide">
          <div className="black" />
          {/* <img src={hello} className="hello" alt="img1" /> */}
          <img src={inter} alt="img2" />
        </div>
        <div className="each-slide">
          <div className="black" />
          {/* <img src={hello} className="hello" alt="img1" /> */}
          <img src={hamdo} alt="img1 " />
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
