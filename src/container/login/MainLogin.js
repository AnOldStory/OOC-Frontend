import React, { Component } from "react";
import CONFIG from "_variables";

const RSA = require("node-rsa");

const rsa = new RSA();

export default class MainLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      isMemberLogin: false,
      rsa: []
    };
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.getRSA();
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
      .then(res=>this.props.tokenHandler(res))
  };

  render() {
    return (
      <div>
        <div className="login content">
          ID
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleIDChange}
          />
          PW
          <input
            type="password"
            name="pw"
            value={this.state.pw}
            onChange={this.handlePWChange}
          />
          <button id="login" onClick={this.props.tokenHandler}>
            로그인
          </button>
        </div>
      </div>
    );
  }
}
