import React, { Component } from "react";
import NoMemLogin from "container/login/NoMemLogin";
import CONFIG from "_variables";

import "./Ticket.scss";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [

      ],
      cancle : [],
    };
    this.showTickets = this.showTickets.bind(this);
  }
  showTickets() {
    fetch(CONFIG.HOMEPAGE+"/ticket?token="+this.props.token)
      .then(res =>res.json())
      .then(res=>this.setState({tickets:res}))
  }

  cancleEvent = (e) => {
    fetch(CONFIG.HOMEPAGE+"/ticket?token="+this.props.token
          +"&tickets="+e)
          .then(res=>console.log(res))

    fetch(CONFIG.HOMEPAGE+"/ticket?token="+this.props.token)
      .then(res =>res.json())
      .then(res=>this.setState({tickets:res}))
  };
  render() {
    return (
      <div className="ticketcontainer">
        {this.props.token === "" ? (
          <NoMemLogin token={this.props.token}
                tokenHandler={this.props.tokenHandler}/>
        ) : (
          <div className="tickets">
            <button onClick={this.showTickets}>조회</button>
            {this.state.tickets.map(
              (index) => (
                <div className="ticket" key={index}
                onClick={()=>this.setState({cancle:[index.id,"dum"]})}>
                  this is ticket
                  <br/>
                  날짜 : {index.screeningIdTicket.screeningDate}
                  <br />
                  시간 : {index.screeningIdTicket.screeningTime} <br />
                  영화 : {index.screeningIdTicket.movieIdSchedule.movieName} <br />
                  영화관 : {index.showRoomId}관 <br />
                  좌석 : {index.seatNumber}
                  <div
                    className="cancleButton"
                    onClick={()=>this.cancleEvent([index.id,"dum"])}
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
