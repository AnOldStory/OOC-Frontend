import React, { Component } from 'react'
import CONFIG from "_variables";

const RSA = require('node-rsa');

const rsa = new RSA();

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
      rsa : '',
    };
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.getRSA();
  }
  getRSA(){
    fetch("http://localhost:4000/login")
    .then(res =>res.text())
    .then(res=> this.setState({rsa:res}))
  }
  handleIDChange(event){
    this.setState({id:event.target.value})
  }
  handlePWChange(event){
    this.setState({pw:event.target.value})
  }
  loginSubmit=(event)=>{
    event.preventDefault();
    console.log("aaasdfasdfasdfasd");
    rsa.importKey(this.state.rsa, "public");
    var encId = rsa.encrypt(this.state.id, "base64", "utf-8");
    var encPw = rsa.encrypt(this.state.pw, "base64", "utf-8");

    fetch("http://localhost:4000/admin/personel",{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:{
        "idEnc" : encId,
        "pwEnc" : encPw,
      }
    }).then(res=>res.json())
    .then(res=>console.log(res))
    this.props.tokenHandler(this.state.token);
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
            value={this.state.id}
            onChange={this.handleIDChange}
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
          <button className="button001" onClick={this.loginSubmit}>
            login
          </button>
        </div>
      </div>
    )
  }
}
