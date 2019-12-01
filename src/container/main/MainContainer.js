import React, { Component } from "react";
import Login from 'container/main/Login';

import "./MainContainer.scss";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        {!this.props.isLogined && <Login
        LoginHandler={this.props.LoginHandler}/>}

        {this.props.isLogined &&
        <div className="login">{this.props.id}님 안녕하세요!</div>}
      </div>
    );
  }
}

export default MainContainer;