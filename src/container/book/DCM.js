import React, { Component } from 'react'
import { Link } from "react-router-dom";

import "container/book/BookContainer.scss";


export default class DCM extends Component {
  render() {
    return (
      <div className="DCMContent">
        <div className="date content">
          <div className="title">DATE</div>
        </div>
        <div className="cinema content">
          <div className="title">CINEMA</div>
          <div onClick={() => this.props.setCinema("asd")}>test</div>
        </div>
        <div className="movie content">
          <div className="title">MOVIE</div>
        </div>
        <Link to="/book/time">NEXT</Link>

      </div>
    )
  }
}
