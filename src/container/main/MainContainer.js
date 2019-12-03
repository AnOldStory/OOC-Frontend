import React, { Component } from "react";
import "./MainContainer.scss";
import Slideshow from "./Slide.js";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="Carousel">
            <Slideshow />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
