import React, { Component } from 'react'

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
    this.props.LoginHandler(this.state.id);
}; 
  render() {
    return (
      <div className="loginContent">
        {!this.props.isLogined &&
          <div className="loginComponent">
          <input type="text" name="id" value={this.state.id} onChange={this.handleIDChange} />
          <br/>
          <input type="password" name="id" value={this.state.pw} onChange={this.handlePWChange} />
          <div className="loginButton" onClick={this.loginSubmit}>Login</div>
        </div>}
      </div>
    )
  }
}
