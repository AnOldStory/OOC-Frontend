import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Seat extends Component {
  render() {
    const seats = [1,1,1,1,1,1,1,1,1,1,1,1,1,
                  1,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,1,1,1,1,1,1,1,1,1,1]
    const seatList = seats.map((seat, index) => (<div className="seat" key={index}>{seat}</div>));
    return (
      <div className="seats">
        <div className="seatList">{seats.map((seat, index) => 
          (<div className={this.props.seat === index+1 ? "selectedseat":"seat"}
          key={index} onClick={()=>this.props.setSeat(index+1)}>{index+1}</div>))}
        </div>
        <Link to="/book/payment">next</Link>
      </div>
    )
  }
}
