import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookContainer.scss";

export default class Initial extends Component {
  render() {
    return (
      <div>
        <Link to="/book/dcm" className="LinkStyle">
          <div className="booking">예매하기</div>
        </Link>
      </div>
    );
  }
}
