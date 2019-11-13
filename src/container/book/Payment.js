import React, { Component } from 'react'
import './Payment.scss';

export default class Payment extends Component {
  render() {
    return (
      <div className="paycontent">
        <div className="dc">
          <div className="title">할인</div>
        </div>
        <div className="payment">
          <div className="title">결제수단</div>
        </div>
        <div className="ticketinfo">
          <div className="title">티켓정보</div>
          {this.props.cinema}<br/>
          {this.props.date}<br/>
          {this.props.movie}<br/>
          {this.props.seat}<br/>
          {this.props.time}<br/>
          <div className="paybutton">결제하기!</div>
        </div>
      </div>
    )
  }
}
