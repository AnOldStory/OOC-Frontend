import React, { Component } from "react";
import "./MainContainer.scss";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="popout">
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
           </div>
          
          <img src={require("./벌레.gif")} alt="bug"/>

        </div>
      </div>
    );
  }
}

export default MainContainer;