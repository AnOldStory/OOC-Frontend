import React, { Component } from 'react'
import CONFIG from "_variables";

const RSA = require('node-rsa');

const rsa = new RSA();

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      pw : '',
      pos : '',
      rsa : '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.getRSA();
  }
  getRSA(){
    fetch(CONFIG.HOMEPAGE + "/admin/login")
    .then(res =>res.text())
    .then(res=> this.setState({rsa:res}))
  }
  handleNameChange(event){
    this.setState({name:event.target.value})
  }
  handlePWChange(event){
    this.setState({pw:event.target.value})
  }
  handlePosChange(event){
    this.setState({pos:event.target.value})
  }
  loginSubmit = event => {
    console.log("login submit");
    event.preventDefault();
    rsa.importKey(this.state.rsa, "public");
    var encPw = rsa.encrypt(this.state.pw, "base64", "utf-8");
    fetch(CONFIG.HOMEPAGE + "/admin/login", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        pwEnc: encPw,
        pos: this.state.pos,
      })
    })
      .then(res => res.text())
      .then(res=>console.log(res))
  };
  render() {
    return (
      <div className="loginContent">
          <div className="login content">
          <div className="title001">로그인{this.state.time}</div>
          <br />
          <input
            className="input001"
            type="text"
            name="id"
            placeholder="ID"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />
          <br />
          <input
            className="input001"
            type="password"
            name="pw"
            placeholder="PASSWORD"
            value={this.state.pw}
            onChange={this.handlePWChange}
          />
          <br />
          <input
            className="input001"
            type="text"
            name="pos"
            placeholder="POSITION"
            value={this.state.pos}
            onChange={this.handlePosChange}
          />
          <br />
          <button className="button001" onClick={this.loginSubmit}>
            login
          </button>
        </div>
      </div>
    )
  }
}
