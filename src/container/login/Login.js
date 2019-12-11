import React, { Component } from "react";
import "./Login.scss";
import CONFIG from "_variables";
import { Input, Button } from "antd";

const RSA = require("node-rsa");

const rsa = new RSA();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      name: "",
      phone: "",
      isMemberLogin: false,
      rsa: []
    };
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

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
  handleIDChange(e) {
    this.setState({ id: e.target.value });
  }
  handlePWChange(e) {
    this.setState({ pw: e.target.value });
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
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
          alert("아이디 비밀번호를 확인하세요");
        } else {
          this.props.tokenHandler(res);
          this.props.memberHandler(true);
        }
      });
  };
  noLoginSubmit = event => {
    this.props.tokenHandler(0);
  };

  render() {
    return (
      <div className="loginContent">
        <div className="login content">
          <div className="title001">Member Login{this.state.time}</div>
          <span className="txt">ID</span>
          <br />
          <Input
            className="input001"
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleIDChange}
          />
          <br />
          <span className="txt">PW</span>
          <br />
          <Input
            className="input001"
            type="password"
            name="pw"
            value={this.state.pw}
            onChange={this.handlePWChange}
          />
          <br />
          <Button className="button001" onClick={this.loginSubmit}>
            login
          </Button>
        </div>
        <div className="noMember content">
          <div className="title001">Nonmember Login</div>

          <Button
            onClick={this.noLoginSubmit}
            className="button001"
            type="submit"
            value="비회원"
          >
            비회원으로 진행
          </Button>
        </div>
      </div>
    );
  }
}
