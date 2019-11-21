import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MenuContainer.scss";


class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
          <Link className="link" to="/">
            <div className="menuItem">Home</div>
            </Link></li>
            <li>
          <Link className="link" to="/people">
            <div className="menuItem">인사</div>
            </Link></li>
            <li>
          <Link className="link" to="/profit">
            <div className="menuItem">재무</div>
            </Link></li>
            <li>
          <Link className="link" to="/stock">
            <div className="menuItem">재고</div>
            </Link></li>
            <li>
          <Link className="link" to="/ticket">
            <div className="menuItem">티켓</div>
            </Link></li>

        </ul>
      </div>
    );
  }
}

export default MenuContainer;