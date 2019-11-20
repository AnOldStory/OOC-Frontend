import React, { Component } from 'react'
import './Payment.scss';
import {Link} from 'react-router-dom';

export default class Payment extends Component {
  constructor(props){
    super(props);
    this.state={
      price:0,
      disrate:0,
      discount:0,
      disname:""
    }
  }
  

  componentDidMount(){
    var hour = this.props.time.substring(0,2);
    var ticket = (hour >= 22 || hour < 6 ?7000:(hour >= 6 && hour < 10 ? 8000 : 10000))
    this.setState({price:this.props.seat.length * ticket })
  }
  applyDiscount = (rate, name) => {
    this.setState({
      disrate : rate,
      disname : name
    })
  }
  paySubmit = () => {
    fetch("book/pay?date="+this.props.date+"&cinema="+this.props.cinema+"&movie="+this.props.movie
    +"&time="+this.props.time+"&seat="+this.props.seat+"&price="+(this.state.price * (1-this.state.disrate)).toFixed(0))
    .then(res => res.json(res))
    .then()
  }
  render() {
    var discounts = [{name:"생일",rate:0.15},
                    {name:"흑우",rate:0.8},
                  {name:"솔로",rate:0.8},
                {name:"커플",rate:-0.9}]
    var payments = [];
    return (
      <div className="paymentcontent">
        <div className="dc content">
          <div className="title">할인</div>
          <div className="paycontent">
           {discounts.map((index,name,rate)=> <div className={index.name==this.state.disname?"selected_dis":"unselected_dis"}
            key={index} onClick={()=>this.applyDiscount(index.rate, index.name)}>{index.name}</div>)}
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
            <ul>
            <li>{this.props.cinema}</li><br/>
            <li>{this.props.date}</li><br/>
            <li>{this.props.movie}</li><br/>
            <li>{this.props.seat}</li><br/>
            <li>{this.props.time}</li><br/>
            <li>{(this.state.price * (1-this.state.disrate)).toFixed(0)}</li>
            <li>할인율 : {this.state.disrate * 100}%</li>
            </ul>
          </div>
          <div className="paybutton" onClick={this.paySubmit}><Link to="/book/result">결제하기!</Link></div>
        </div>
      </div>
    )
  }
}