import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MenuContainer.scss";


class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/">HOME</Link>
        <Link to="/people">인사</Link>
        <Link to="/profit">재무</Link>
        <Link to="/stock">재고</Link>
        <Link to="/ticket">티켓</Link>
      </div>
    );
  }
}

export default MenuContainer;