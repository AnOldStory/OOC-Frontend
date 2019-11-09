import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Seat extends Component {
  render() {
    const seats = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    const seatList = seats.map((seat, index) => (<div className="seat" key={index}>{seat}</div>));
    return (
      <div>
        <div className="seatlist">{seatList}</div>
        <Link to="/book/payment">next</Link>
      </div>
    )
  }
}
