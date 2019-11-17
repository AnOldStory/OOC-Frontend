import React, { Component } from "react";
import "./MainContainer.scss";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className = "List_title">
            <p> Screening List </p>
          </div>
          <div className = "List_movie">
            <ol>
              <li> 1.어벤져스</li>
              <li> 2.82년생 김지영</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
