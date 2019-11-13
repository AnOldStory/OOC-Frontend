import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";


export default class Time extends Component {
  render() {
    var times = ["10:30","12:40","16:40"];
    return (
      <div className="timeContent">
        <div className="title">Time</div>
        <div className="times">
          {times.map((time, index) => 
          (<div className="select"
          key={index} onClick={()=>this.props.setTime(time)}>{time}</div>))}
        </div>
        <div className="next">
          <Link className="nextButton" to="/book/seat"><span>NEXT</span></Link>
        </div>
      </div>
    )
  }
}
