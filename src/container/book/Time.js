import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./BookContainer.scss";

import CONFIG from "_variables";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: []
    };
    this.getTime();
  }
  getTime() {
    fetch(
      CONFIG.HOMEPAGE +
        "/book/?date=" +
        this.props.date +
        "&cinema=" +
        this.props.cinema +
        "&movie=" +
        this.props.movieId
    )
      .then(res => res.json(res))
      .then(res => {
        console.log(res);
        res.map((data, index) => {
          this.setState({
            times: this.state.times.includes(data.screeningTime)
              ? this.state.times
              : [
                  ...this.state.times,
                  { time: data.screeningTime, 
                    screen: data.screeningId,
                    showRoomId:data.showRoomId }
                ]
          });
          return "";
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="timeContent">
        <div className="title">Time</div>
        <div className="times">
          {this.state.times.map((timedata, index) => (
            <div
              className={
                timedata.time === this.props.time
                  ? "selectedtime"
                  : "unselectedtime"
              }
              key={index}
              onClick={() => this.props.setTime(timedata)}
            >
              {timedata.time}
              <br />
              {timedata.screen} 관
              <br />
              {timedata.time.substring(0, 2) >= 22 ||
              timedata.time.substring(0, 2) < 6
                ? "심야"
                : timedata.time.substring(0, 2) >= 6 &&
                  timedata.time.substring(0, 2) < 10
                ? "조조"
                : "일반"}
            </div>
          ))}
        </div>
        <div className="next">
          <Link className="nextButton" to="/book/seat">
            <span className = "Time_next">NEXT</span>
          </Link>
        </div>
      </div>
    );
  }
}
