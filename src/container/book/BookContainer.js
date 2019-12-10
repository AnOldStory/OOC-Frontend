import React, { Component } from "react";
import "./BookContainer.scss";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="state">
          <div
            className={
              this.props.date === "선택 전" ? "eachstate" : "eachstateafter"
            }
          >
            <span className = "bar_title">DATE</span>
            <span className = "bar_content">{this.props.date}</span>
          </div>

          <div
            className={
              this.props.cinema === "선택 전" ? "eachstate" : "eachstateafter"
            }
          >
            <span className = "bar_title">CINEMA</span>
            <span className = "bar_content">{this.props.cinema}</span>
          </div>

          <div
            className={
              this.props.movie === "선택 전" ? "eachstate" : "eachstateafter"
            }
          >
            <span className = "bar_title">MOVIE</span>
            <span className = "bar_content">{this.props.movie}</span>
          </div>

          <div
            className={
              this.props.time === "선택 전" ? "eachstate" : "eachstateafter"
            }
          >
            <span className = "bar_title">TIME</span>
            <span className = "bar_content">{this.props.time}</span>
          </div>

          <div
            className={
              this.props.seat.length === 0 ? "eachstate" : "eachstateafter"
            }
          >
            <span className = "bar_title">SEAT</span>
            <span className = "bar_content">{this.props.seat.join()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BookContainer;
