import React, { Component } from "react";
import "./MainContainer.scss";
import Bug from 'image/mainlogo.gif';

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div>
            <img src={Bug} alt="main"/>
        </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
