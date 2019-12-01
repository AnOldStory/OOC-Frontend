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
    console.log(this.state.rsa);
  }
  getRSA(){
    fetch("http://ec2-54-180-119-225.ap-northeast-2.compute.amazonaws.com:3000/login")
    .then(res =>res.text())
    .then(res=>{
      this.setState({rsa:res})
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
    console.log(encPw)
    fetch("http://ec2-54-180-119-225.ap-northeast-2.compute.amazonaws.com:3000/login",{
      method:'POST',
      body:JSON.stringify({
        "member":true,
        "id" : this.state.id,
        "pwEnc" : this.state.pw,
      })
    }).then(res=>res.text())
    .then(res=>this.props.tokenHandler(res))
  }; 
  noLoginSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state.rsa);

    rsa.importKey(this.state.rsa, "public");
    var encPhone = rsa.encrypt(this.state.phone, "base64", "utf-8");
    fetch("http://ec2-54-180-119-225.ap-northeast-2.compute.amazonaws.com:3000/login",{
      method:'POST',
      body:JSON.stringify({
        "member":false,
        "name" : this.state.id,
        "phEnc" : encPhone,
      })
    }).then(res=>res.text())
    .then(res=>this.props.tokenHandler(res))
  }; 

  render() {
    return (
      <div className="loginContent">
        <div className="login content">
          <div>회원 로그인</div>
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
