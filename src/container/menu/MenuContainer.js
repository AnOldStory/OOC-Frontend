import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuContainer.scss";
import MainLogin from "container/login/MainLogin";

import Logo from "image/Logo.png";

class MenuContainer extends Component {
  tokenReset() {
    if(this.props.member === false){
      this.props.initializeState();
      this.props.tokenHandler("");
    }
  }

  bookClick() {
    {
      this.tokenReset();
    }
  }
  render() {
    return (
      <div className="menu">
        <div className="small_bar">
          <ul>
            <li>
              <Link to="/ticket" className="menuLink">
                <div className="menu_item" onClick={()=>this.tokenReset()}>TICKET</div>
              </Link>
            </li>
            <li>
              <Link to="/book" className="menuLink">
                <div className="menu_item" onClick={()=>this.bookClick()}>BOOK</div>
              </Link>
            </li>
            <li>
              <Link to="/signin" className="menuLink">
                <div className="menu_item" onClick={()=>this.tokenReset()}>SignIn</div>
              </Link>
            </li>
            {this.props.member ===true &&
              <li>
                <div className="menu_item" onClick={()=>this.props.memberLogout()}>LOGOUT</div>
            </li>}
          </ul>
        </div>
        <div className="big_bar" onClick={()=>this.tokenReset()}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MenuContainer;
