import React, { Component } from 'react'
import './Login.scss';

const RSA = require('node-rsa');

const rsa = new RSA();

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
      name : '',
      phone : '',
      isMemberLogin : false,
      rsa : [],
    }
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    
    this.getRSA();
  }
  getRSA(){
    fetch("http://localhost:4000/login")
    .then(res =>res.text())
    .then(res=>{
      console.log(res)
    })
  }
  handleIDChange(e){
    this.setState({id:e.target.value})
  }
  handlePWChange(e){
    this.setState({pw:e.target.value})
  }
  handleNameChange(e){
    this.setState({name:e.target.value})
  }
  handlePhoneChange(e){
    this.setState({phone:e.target.value})
  }
  loginSubmit =(event)=>{
    console.log("login submit")
    event.preventDefault();
    console.log(this.state.rsa);

    rsa.importKey(this.state.rsa, "public");
    var encPw = rsa.encrypt(this.state.pw, "base64", "utf-8");
    fetch("http://192.168.43.225:3000/login",{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:{
        "id" : this.state.id,
        "pwEnc" : encPw,
      }
    }).then(res=>res.text())
    .then(res=>console.log(res))
  }; 
  noLoginSubmit=(event)=>{
    event.preventDefault();
    rsa.importKey(this.state.rsa, "public");
    var encName = rsa.encrypt(this.state.name, "base64", "utf-8");
    var encPhone = rsa.encrypt(this.state.phone, "base64", "utf-8");
    fetch("http://localhost:4000/login",{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:{
        "idEnc" : encName,
        "pwEnc" : encPhone,
      }
    }).then(res=>res.json())
    .then(res=>console.log(res))
}; 

  render() {
    return (
      <div className="loginContent">
        <div className="login content">
          <div>회원 로그인 {this.props.time}</div>
            ID
            <input type="text" name="id" value={this.state.id} 
            onChange={this.handleIDChange} />
            PW
            <input type="password" name="pw" value={this.state.pw}
            onChange={this.handlePWChange} />
            <button onClick={this.loginSubmit}>login</button>
        </div>
        <div className="noMember content">
          <div>비회원 로그인</div>

          <form action={this.noLoginSubmit}>
            Name
            <input type="text" name="name" value={this.state.name} 
            onChange={this.handleNameChange} />
            PhoneNumber
            <input type="text" name="phone" value={this.state.phone}
            onChange={this.handlePhoneChange} />
            <input type="submit" value="비회원" onClick={()=>this.props.tokenHandler("ass")}/>
          </form>
        </div>
        
        
      </div>
    )
  }
}
