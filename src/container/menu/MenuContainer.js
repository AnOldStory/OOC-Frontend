import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuContainer.scss";

import Logo from "image/Logo.png";

class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/"><img src={Logo} alt="logo"/></Link>
        <ul>
          <li><Link to="/" className="menuLink">
            <div className="menu_item">TICKET</div></Link>
          </li>
          <li><Link to="/book" className="menuLink">
            <div className="menu_item">BOOK</div></Link>
          </li>
          
        </ul>
      </div>
    );
  }
}

export default MenuContainer;
