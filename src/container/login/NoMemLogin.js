import React, { Component } from "react";
import "./Login.scss";
import CONFIG from "_variables";

const RSA = require("node-rsa");

const rsa = new RSA();

export default class NoMemLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      serial: "",
      isMemberLogin: false,
      rsa: []
    };
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSerialChange = this.handleSerialChange.bind(this);

    this.getRSA();
    console.log(this.state.rsa);
  }
  getRSA() {
    fetch(CONFIG.HOMEPAGE + "/login")
      .then(res => res.text())
      .then(res => {
        this.setState({ rsa: res });
      });
  }
  handleSerialChange(e) {
    this.setState({ serial: e.target.value });
  }
  handleIDChange(e) {
    this.setState({ id: e.target.value });
  }
  handlePWChange(e) {
    this.setState({ pw: e.target.value });
  }

  loginSubmit = event => {
    console.log("login submit");
    event.preventDefault();
    console.log(this.state.rsa);

    rsa.importKey(this.state.rsa, "public");
    var encPw = rsa.encrypt(this.state.pw, "base64", "utf-8");
    fetch(CONFIG.HOMEPAGE + "/login", {
      method: "POST",
      body: JSON.stringify({
        member: true,
        id: this.state.id,
        pwEnc: encPw
      })
    })
      .then(res => res.text())
      .then(res => {
        if (res.includes("<!DOCTYPE html>")) {
          alert("아이디 비밀번호를 확인하세요")
        }
        else {
          this.props.tokenHandler(res)
          this.props.memberHandler(true)
        }
      });
  };

  nologinSubmit = event => {
    console.log("login submit");
    event.preventDefault();
    console.log(this.state.rsa);
    let serialRule = /^\d{8}$/;
    if (!serialRule.test(this.state.serial)) {
      alert("Serial 형식이 올바르지 않습니다.");
    } else {
      rsa.importKey(this.state.rsa, "public");

      var serialEnc = rsa.encrypt(this.state.serial, "base64", "utf-8");
      fetch(CONFIG.HOMEPAGE + "/login", {
        method: "POST",
        body: JSON.stringify({
          member: false,
          serialEnc: serialEnc
        })
      })
        .then(res => res.text())
        .then(res => {
          if(res.includes("<!DOCTYPE html>")) {
            alert("Serial 형식이 올바르지 않습니다.");
          }
          else {
            this.props.tokenHandler(res);
          }
          console.log(res);
        });
    }
  };

  render() {
    return (
      <div className="loginContent">
        <div className="login content">
          <div className="title001">Member Login{this.state.time}</div>
          <span className="txt">ID</span>
          <br />
          <input
            className="input001"
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleIDChange}
          />
          <br />
          <span className="txt">PW</span>
          <br />
          <input
            className="input001"
            type="password"
            name="pw"
            value={this.state.pw}
            onChange={this.handlePWChange}
          />
          <br />
          <button className="button001" onClick={this.loginSubmit}>
            login
          </button>
        </div>
        <div className="noMember content">
          <div className="title001">Nonmember Login</div>
          <span className="txt">SERIAL</span>
          <br />
          <input
            className="input001"
            type="text"
            name="serial"
            value={this.state.serial}
            onChange={this.handleSerialChange}
          />

          <button
            onClick={this.nologinSubmit}
            className="button001"
            type="submit"
            value="비회원"
          >
            비회원으로 진행
          </button>
        </div>
      </div>
    );
  }
}
