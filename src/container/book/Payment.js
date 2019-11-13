import React, { Component } from 'react'
import './Payment.scss';

export default class Payment extends Component {
  render() {
    return (
      <div className="paymentcontent">
        <div className="dc content">
          <div className="title">할인</div>
          <div className="paycontent">
            할인내용
          </div>
        </div>
        <div className="payment content">
          <div className="title">결제수단</div>
          <div className="paycontent">
            결제수단내용
          </div>
        </div>
        <div className="ticketinfo content">
          <div className="title">티켓정보</div>
          <div className="paycontent">
            {this.props.cinema}<br/>
            {this.props.date}<br/>
            {this.props.movie}<br/>
            {this.props.seat}<br/>
            {this.props.time}<br/>
          </div>
          <div className="paybutton">결제하기!</div>
        </div>
      </div>
    )
  }
}
