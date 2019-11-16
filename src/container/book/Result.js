import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Result extends Component {
  render() {
    return (
      <div>
        {!this.props.result && 
        <div>
          {alert("예매실패!")}}
        </div>}


        {this.props.result &&
        <div>
          {alert("예매성공!")}
          <div className="ticket">
            this is ticket<hr/>
            날짜 : {this.props.date}<br/>
            시간 : {this.props.time} <br/>
            영화 : {this.props.movie} <r/>
            영화관 : {this.props.cinema}<br/>
            좌석 : {this.props.seat.join()}
          </div>
          <div onClick={window.location.reload}><Link to="/">확인</Link></div>
        </div>
         }
    </div>
    )
  }
}