import React, { Component } from "react";
import "./BookContainer.scss";
import { Link } from "react-router-dom";
import DCM from "container/book/DCM";


class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinema: "선택전",
      movie: "선택 전",
      date: "선택 전",
      time: "선택 전",
      seat: ["선택 전"],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="state">
          <div className="eachstate">DATE {this.state.date}</div>
          <div className="eachstate">CINEMA {this.state.cinema}</div>
          <div className="eachstate">MOVIE {this.state.movie}</div>
          <div className="eachstate">TIME {this.state.time}</div>
          <div className="eachstate">SEAT {this.state.seat}</div>
          
        </div>
        <DCM/>
      </div>
    );
  }
}

export default BookContainer;
