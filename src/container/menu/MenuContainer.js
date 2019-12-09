import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuContainer.scss";
import MainLogin from "container/login/MainLogin";

import Logo from "image/Logo.png";

class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <div className="small_bar">
          <ul>
            <li>
              <Link to="/ticket" className="menuLink">
                <div className="menu_item">TICKET</div>
              </Link>
            </li>
            <li>
              <Link to="/book" className="menuLink">
                <div className="menu_item">BOOK</div>
              </Link>
            </li>
            <li>
              <Link to="/signin" className="menuLink">
                <div className="menu_item">SignIn</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="big_bar">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MenuContainer;
