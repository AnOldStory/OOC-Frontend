import React, { Component } from "react";
import "./BookContainer.scss";
import { Link } from "react-router-dom";

const seats = [
  { row: "A", col: "1" },
  { row: "A", col: "2" },
  { row: "A", col: "3" },
  { row: "A", col: "4" },
  { row: "A", col: "5" },
  { row: "A", col: "6" },
  { row: "A", col: "7" },
  { row: "A", col: "8" },
  { row: "A", col: "9" },
  { row: "A", col: "10" },
  { row: "B", col: "1" },
  { row: "B", col: "2" },
  { row: "B", col: "3" },
  { row: "B", col: "4" },
  { row: "B", col: "5" },
  { row: "B", col: "6" },
  { row: "B", col: "7" },
  { row: "B", col: "8" },
  { row: "B", col: "9" },
  { row: "B", col: "10" }
];

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinema: "영화관",
      movie: "영화",
      date: "날짜",
      time: "시간",
      seat: ["공석"],
      step:"cinema"
    };
  }
  render() {
    return (
      <div className="container">
        <div className="top">예매</div>
        <div className="stepLink">
          <div className="linkItem">
            <Link to="/book/cinema" style={{ textDecoration: 'none' }}>
              Cinema
            </Link>
          </div>
          <div className="linkItem">
            <Link to="/book/date" style={{ textDecoration: 'none' }}>
              date
              </Link></div>
          <div className="linkItem">
            <Link to="/book/movie" style={{ textDecoration: 'none' }}>
              Movie
            </Link>
          </div>
          <div className="linkItem">
            <Link to="/book/payment" style={{ textDecoration: 'none' }}>
              Pay
            </Link>
          </div>
        </div>
        <div className="step">
          영화관={this.state.cinema}
          영화={this.state.movie}
          날짜={this.state.date}
        </div>
      </div>
    );
  }
}

export default BookContainer;
