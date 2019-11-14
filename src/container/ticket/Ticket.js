import React, { Component } from 'react'
import './Ticket.scss';
var tickets = [];

export default class Ticket extends Component {
  constructor(props){
    super(props);
    this.state = {
      tickets : [{
        movie:'83년생',
        time : '15:30',
      }],
    }
  }
  render() {
    return (
      <div className="ticketcontainer">
        <div className="ticket">This is Ticket<hr/>
        {this.state.tickets[0].movie}</div>
        
      </div>
    )
  }
}
