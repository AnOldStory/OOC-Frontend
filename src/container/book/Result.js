import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Result extends Component {
  render() {
    return (
      <div>
        {!this.props.result && <div>{alert("예매실패!")}}</div>}

        {this.props.result && (
          <div>
            <div className="ticket">
              <span className="ticketTitle">TICKET :{this.props.movie} </span>
              <hr />
              <ul>
                <li>날짜 : {this.props.date}</li>
                <li>시간 : {this.props.time} </li>
                <li>영화관 : {this.props.cinema}</li>
                <li>좌석 : {this.props.seat.join()}</li>
              </ul>
            </div>
            <div onClick={() => this.props.initialize()}>
              <Link to="/">확인</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
