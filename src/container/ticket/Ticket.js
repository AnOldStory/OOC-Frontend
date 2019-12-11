import React, { Component } from "react";
import NoMemLogin from "container/login/NoMemLogin";
import CONFIG from "_variables";
import { Button } from "antd";

import "./Ticket.scss";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      cancle: []
    };
    this.showTickets = this.showTickets.bind(this);
    this.showTickets();
  }
  showTickets() {
    fetch(CONFIG.HOMEPAGE + "/ticket?token=" + this.props.token)
      .then(res => res.json())
      .then(res => {
        this.setState({ tickets: res });
        if (this.state.tickets.length === 0) {
          alert("예약된 티켓이 없습니다");
        }
      });
  }

  cancelEvent = e => {
    fetch(
      CONFIG.HOMEPAGE + "/ticket?token=" + this.props.token + "&tickets=" + e
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.result === "OK") {
          this.setState({ tickets: [] });
        } else {
          setTimeout(() => {
            this.showTickets();
          }, 100);
        }
      })
      .catch(() => this.setState({ tickets: [] }));

    // fetch(CONFIG.HOMEPAGE+"/ticket?token="+this.props.token)
    //   .then(res =>res.json())
    //   .then(res=>this.setState({tickets:res}))
  };

  render() {
    return (
      <div className="ticketcontainer">
        {this.props.token === "" ? (
          <NoMemLogin
            token={this.props.token}
            tokenHandler={this.props.tokenHandler}
            memberHandler={this.props.memberHandler}
          />
        ) : (
          <div className="tickets">
            <button className="ticket_button" onClick={this.showTickets}>
              조회
            </button>

            {this.state.tickets.map((index, i) => (
              <div
                className="ticket"
                key={i}
                onClick={() => this.setState({ cancel: [index.id, "dum"] })}
              >
                <div className="Ticket_Content">
                  <Button
                    className="cancelButton"
                    type="Cancel"
                    onClick={() => this.cancelEvent([index.id, "dum"])}
                  >
                    취소하기
                  </Button>
                  <h3 className="Detail_Content">상세내용</h3>

                  <span className="Date_Content">
                    날짜 : {index.screeningIdTicket.screeningDate}
                  </span>
                  <br />
                  <span className="Time_Content">
                    시간 : {index.screeningIdTicket.screeningTime}{" "}
                  </span>
                  <br />
                  <span className="Movie_title_Content">
                    영화 : {index.screeningIdTicket.movieIdSchedule.movieName}{" "}
                  </span>
                  <br />
                  <span className="Theater_title_Content">
                    영화관 : {index.showRoomId}관
                  </span>
                  <br />
                  <span className="Seat_title_Content">
                    좌석 : {index.seatNumber}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
