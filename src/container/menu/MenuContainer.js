import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuContainer.scss";

import Logo from "image/Logo.png";

class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="menu_item">
          <Link to="/book">
            <div>예매</div>
          </Link>
        </div>
        <div className="menu_item">
          <Link>차트</Link>
        </div>
        <div className="menu_item">
          <Link to="/shop">먹거리</Link>
        </div>
        <div className="menu_item">
          <Link to="/mypage">마이페이지</Link>
        </div>
      </div>
    );
  }
}

export default MenuContainer;
