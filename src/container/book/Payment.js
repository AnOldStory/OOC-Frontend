import React, { Component } from "react";
import "./Payment.scss";
import { Link } from "react-router-dom";
import Pay from "container/book/Pay";

import CONFIG from "_variables";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      disrate: 0,
      discount: 0,
      disname: "",
      method: "",
      email: "",
      phone: ""
    };
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }
  handleMailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }
  componentDidMount() {
    var hour = this.props.time.substring(0, 2);
    var ticket =
      hour >= 22 || hour < 6 ? 7000 : hour >= 6 && hour < 10 ? 8000 : 10000;
    this.setState({ price: this.props.seat.length * ticket });
  }
  applyDiscount = (rate, name) => {
    this.setState({
      disrate: rate,
      disname: name
    });
  };
  applyMethod = name => {
    this.setState({
      method: name
    });
  };
  paySubmit = () => {
    if (this.props.token === 0) {
      this.noMemberpaySubmit();
    } else {
      this.MemberpaySubmit();
    }
  };
  noMemberpaySubmit = () => {
    fetch(
      CONFIG.HOMEPAGE +
        "/book?date=" +
        this.props.date +
        "&cinema=" +
        this.props.cinema +
        "&movie=" +
        this.props.movie +
        "&time=" +
        this.props.time +
        "&seats=" +
        this.props.seat +
        "&token=" +
        0 +
        "&payment=" +
        this.state.method +
        "&price=" +
        (this.state.price * (1 - this.state.disrate)).toFixed(0) +
        "&event=" +
        this.state.disname +
        "&showroom=" +
        this.props.screen +
        "&mail=" +
        this.state.mail +
        "&phone=" +
        this.state.phone
    ).then(res => console.log(res));
  };
  MemberpaySubmit = () => {
    fetch(
      CONFIG.HOMEPAGE +
        "/book?date=" +
        this.props.date +
        "&cinema=" +
        this.props.cinema +
        "&movie=" +
        this.props.movie +
        "&time=" +
        this.props.time +
        "&seats=" +
        this.props.seat +
        "&token=" +
        this.props.token +
        "&payment=" +
        this.state.method +
        "&price=" +
        (this.state.price * (1 - this.state.disrate)).toFixed(0) +
        "&event=" +
        this.state.disname +
        "&showroom=" +
        this.props.screen
    ).then(res => console.log(res));
  };
  render() {
    return (
      <div className="paymentcontent">
        <div className="dc content">
          <div className="title">할인</div>
          <div className="paycontent">
            <div
              className={
                this.state.disname === "birth"
                  ? "dcContent selected"
                  : "dcContent"
              }
              onClick={() => this.applyDiscount(0.15, 1)}
            >
              <img alt="birth" src={require("container/book/img/birth.png")} />
              <br />
              생일
            </div>
            <div
              className={
                this.state.disname === "couple"
                  ? "dcContent selected"
                  : "dcContent"
              }
              onClick={() => this.applyDiscount(0.01, 2)}
            >
              <img
                alt="couple"
                src={require("container/book/img/couple.png")}
              />
              <br />
              커플
            </div>
            <div
              className={
                this.state.disname === "solo"
                  ? "selected dcContent"
                  : "dcContent"
              }
              onClick={() => this.applyDiscount(0.8, 3)}
            >
              <img alt="solo" src={require("container/book/img/solo.png")} />
              <br />
              솔로
            </div>
            <div
              className={
                this.state.disname === "bird"
                  ? "dcContent selected"
                  : "dcContent"
              }
              onClick={() => this.applyDiscount(0.3, 4)}
            >
              <img alt="bird" src={require("container/book/img/bird.png")} />
              <br />
              얼리버드
            </div>
          </div>
        </div>
        <div className="payment content">
          <div className="title">결제수단</div>
          <div className="paycontent">
            <div
              className={
                this.state.method === "card"
                  ? "dcContent selected"
                  : "dcContent"
              }
              onClick={() => this.applyMethod("card")}
            >
              <img alt="card" src={require("container/book/img/card.png")} />
              <br />
              카드결제
            </div>

            <div
              className={
                this.state.method === "bank"
                  ? "dcContent selected"
                  : "dcContent"
              }
              onClick={() => this.applyMethod("bank")}
            >
              <img alt="bank" src={require("container/book/img/bank.png")} />
              <br />
              카드결제
            </div>
          </div>
        </div>
        <div className="ticketinfo content">
          <div className="title">결제정보</div>
          <div className="paycontent">
            <div className="price paySubcontent">
              <div className="subTitle">금액</div>
              {this.state.price}
            </div>

            <div className="discount paySubcontent">
              <div className="subTitle">할인내용</div>
              {this.state.disname} : {this.state.disrate * 100}% 할인금액 :{" "}
              {this.state.price * this.state.disrate}원
            </div>

            <div className="finalPrice paySubcontent">
              <div className="subTitle">최종금액</div>
              {(this.state.price * (1 - this.state.disrate)).toFixed(0)}
            </div>
          </div>
          {this.props.token === 0 && (
            <div className="noMember">
              <input
                className="Input003"
                type="text"
                value={this.state.email}
                onChange={this.handleMailChange}
                placeholder="E-MAIL"
              />
              <input
                className = "Input003"
                type="text"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
                placeholder="PHONE"
              />
            </div>
          )}
          <div className="paybutton" onClick={this.paySubmit}>
            <Pay
              result={this.state.result}
              cinema={this.props.cinema}
              movieId={this.props.movieId}
              movie={this.props.movie}
              date={this.props.date}
              time={this.props.time}
              screen={this.props.screen}
              seat={this.props.seat}
              initialize={this.props.initializeState}
            />
          </div>
        </div>
      </div>
    );
  }
}
