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
        seat : [1,2],
        cinema:'평양',
        date:"2019/11/19",
      },{
        movie:'83년생',
        time : '15:30',
        seat : [1,2],
        cinema:'평양',
        date:"2019/11/19",
      },
    ],
      
    }
  }
  componentDidMount(){
    fetch("book/show?id="+this.props.id)
    .then(res => res.json(res))
    .then(res => this.setState({tickets : res}))
  }

  cancleEvent=(time,movie,cinema,date,seat)=>{
    fetch("book/cancle?time="+time+"&movie="+movie+"&cinema="+cinema
    +"&date="+date+"&seat="+seat)
    .then(res => res.json(res))
    .then(alert("취소 성공"))
  }
  render() {
    return (
      <div className="ticketcontainer">
        {this.props.token == "" ?
        <div className="notLogined">로그인하십쇼</div>:

        <div className="tickets">
          {this.state.tickets
          .map(
          (index,movie,time,seat,cinema,date)=>(<div className="ticket" key={index}>
            this is ticket<hr/>
            날짜 : {index.date}<br/>
            시간 : {index.time} <br/>
            영화 : {index.movie} <br/>
            영화관 : {index.cinema}관 <br/>
            좌석 : {index.seat.join()}
            <div
            className="cancleButton" 
            onClick={()=>this.cancleEvent(time,movie,seat,cinema,date)}>예매취소</div>
            </div>)
        )}
        </div>}
        
      </div>
    )
  }
}
