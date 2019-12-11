import React, { Component } from "react";
import "./MainContainer.scss";
import { Button } from "antd";
import Slideshow from "./Slide.js";
import interposter from "./interposter.jpg";
import mark12 from "./12.png";
import mark15 from "./15.png";
import gok from "./gok.jpg";
import joker from "./joker.jpg";
import amm from "./amm.jpg";

class MainContainer extends Component {
  handleClick(e) {
    alert("준비중입니다.");
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="Carousel">
            <Slideshow />
          </div>
        </div>
        <div className="rank">
          <ul className="rank-movie-box">
            <li className="rank-movie">
              <img src={interposter} alt="w" />
              <div className="rank-name">
                <div>
                  <img className="rank-mark" src={mark12} alt="w" />
                  인터스텔라
                </div>
                <Button className="rank-btn" onClick={this.handleClick}>
                  상세정보
                </Button>
                <Button className="rank-btn" onClick={this.handleClick}>
                  예매하기
                </Button>
              </div>
            </li>
            <li className="rank-movie">
              <img src={gok} alt="w" />
              <div className="rank-name">
                <div>
                  <img className="rank-mark" src={mark15} alt="w" />
                  곡성
                </div>
                <Button className="rank-btn" onClick={this.handleClick}>
                  상세정보
                </Button>
                <Button className="rank-btn" onClick={this.handleClick}>
                  예매하기
                </Button>
              </div>
            </li>
            <li className="rank-movie">
              <img src={joker} alt="w" />
              <div className="rank-name">
                <div>
                  <img className="rank-mark" src={mark15} alt="w" />
                  조커
                </div>
                <Button className="rank-btn" onClick={this.handleClick}>
                  상세정보
                </Button>
                <Button className="rank-btn" onClick={this.handleClick}>
                  예매하기
                </Button>
              </div>
            </li>
            <li className="rank-movie">
              <img src={amm} alt="w" />
              <div className="rank-name">
                <div>
                  <img className="rank-mark" src={mark15} alt="w" />
                  군함도
                </div>
                <Button className="rank-btn" onClick={this.handleClick}>
                  상세정보
                </Button>
                <Button className="rank-btn" onClick={this.handleClick}>
                  예매하기
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainContainer;
