import React, { Component } from "react";
import "./FooterContainer.scss";

import Logo from "image/Logo.png";

export default class FooterContainer extends Component {
  handleClick(e) {
    alert("없이 무한으로 즐기세요!");
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-wrap">
          <img className="footer-logo" src={Logo} alt="logo" />
          <br />
          <br />
          <span className="fakelink" onClick={this.handleClick}>
            개인정보처리방침
          </span>
          |
          <span className="fakelink" onClick={this.handleClick}>
            이용약관
          </span>
          |
          <span className="fakelink" onClick={this.handleClick}>
            책임의 한계와 법적고지
          </span>
          <br />
          <br />
          고객센터 윤리경영 경기도 안산시 상록구 사3동 한양대학로 55 대표자명
          떼스크이 | Copyright 2019 by AnOldStory, Inc. All rights reserved
        </div>
      </div>
    );
  }
}
