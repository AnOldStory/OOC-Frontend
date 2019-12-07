import React, { Component } from "react";
import Login from "container/login/Login";
import CONFIG from "_variables";

import "./Ticket.scss";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [
        {
          movie: "83년생",
          time: "15:30",
          seat: [1, 2],
          cinema: "평양",
          date: "2019/11/19"
        },
        {
          movie: "83년생",
          time: "15:30",
          seat: [1, 2],
          cinema: "평양",
          date: "2019/11/19"
        }
      ]
    };
    this.showTickets = this.showTickets.bind(this);
  }
  showTickets() {
    fetch(CONFIG.HOMEPAGE+"/ticket?token="+this.props.token)
      .then(res => res.json(res))
      .then(res=>this.setState({tickets:res}));
  }

  cancleEvent = (time, movie, cinema, date, seat) => {
    fetch(
      "book/cancle?time=" +
        time +
        "&movie=" +
        movie +
        "&cinema=" +
        cinema +
        "&date=" +
        date +
        "&seat=" +
        seat
    )
      .then(res => res.json(res))
      .then(alert("취소 성공"));
  };
  render() {
    return (
      <div className="ticketcontainer">
        {this.props.token === "" ? (
          <Login token={this.props.token}
                tokenHandler={this.props.tokenHandler}/>
        ) : (
          <div className="tickets">
            <button onClick={this.showTickets}>조회</button>
            {this.state.tickets.map(
              (index) => (
                <div className="ticket" key={index}>
                  this is ticket
                  <hr />
                  날짜 : {index.screeningIdTicket.screeningDate}
                  <br />
                  시간 : {index.screeningIdTicket.screeningTime} <br />
                  영화 : {index.screeningIdTicket.movieId} <br />
                  영화관 : {index.showRoomId}관 <br />
                  좌석 : {index.seatNumber}
                  <div
                    className="cancleButton"
                 
                  >
                    예매취소
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    );
  }
}
