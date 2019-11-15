import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Seat extends Component {
  constructor(props) {
    super(props);
    let table = [];
    for (let i = 0; i < 52; i++) {
      table.push(1);
    }
    this.state = {
      seats: table
    };
  }
  render() {
    return (
      <div className="seats">
        <div className="seatList">
          {this.state.seats.map((seat, index) => (
            <div
              className={
                this.props.seat.includes(index + 1) ? "selectedseat" : "seat"
              }
              key={index}
              onClick={() => {
                this.props.setSeat(index + 1);
                let newSeats = this.state.seats;
                newSeats[index] = !newSeats[index];
                this.setState({
                  seats: newSeats
                });
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
          <div className="next">
            <Link className="nextButton" to="/book/payment">
              <span>NEXT</span>
              </Link>
          </div>      
        </div>
    );
  }
}
