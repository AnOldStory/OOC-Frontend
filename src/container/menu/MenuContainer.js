import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MenuContainer.scss";


class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <div className="logo">
          <Link to='/'><img src={require("./OOC로고4.png")} alt="logo"/>
          </Link>
        </div>
        <div className="menu_item">
          <Link to='/book'><div>예매</div></Link>
        </div>
        <div className="menu_item"><Link>차트</Link></div>
      </div>
    );
  }
}

export default MenuContainer;