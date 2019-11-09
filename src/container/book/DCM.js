import React, { Component } from 'react'
import { Link } from "react-router-dom";

import "container/book/BookContainer.scss";



export default class DCM extends Component {
  render() {
    var dates = ["2019/11/08","2019/11/09","2019/11/10","2019/11/11"];
    var cinemas = ["안산","서울","평양","뉴욕"];
    var movies = ["어벤져스","82년생김지영"];
    return (
      <div className="DCMContent">
        <div className="date content">
          <div className="title">DATE</div>
          {dates.map((date, index) => 
          (<div className="select"
          key={index} onClick={()=>this.props.setDate(date)}>{date}</div>))}
        </div>
        <div className="cinema content">
          <div className="title">CINEMA</div>
          {cinemas.map((cinema, index) => 
          (<div className="select"
          key={index} onClick={()=>this.props.setCinema(cinema)}>{cinema}</div>))}
        </div>
        <div className="movie content">
          <div className="title">MOVIE</div>
          {movies.map((movie, index) => 
          (<div className="select"
          key={index} onClick={()=>this.props.setMovie(movie)}>{movie}</div>))}
        </div>
        <div className="next">
          <Link to="/book/time">NEXT</Link>
        </div>
      </div>
    )
  }
}
