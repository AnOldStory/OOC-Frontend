import React, { Component } from 'react'

import './Signin.scss';
import CONFIG from "_variables";


const RSA = require('node-rsa');

const rsa = new RSA();
const url = "http://ec2-54-180-119-225.ap-northeast-2.compute.amazonaws.com:3000/signin";

export default class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      pw:'',
      name:'',
      phone:'',
      mail:'',
      rsa:'',
    }
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.getRSA();
  }
  getRSA(){
    fetch(CONFIG.HOMEPAGE + "/signin")
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
   handleMailChange(e){
    this.setState({mail:e.target.value})
  }

  signInSubmit =(event)=>{
    event.preventDefault();
    console.log(this.state.rsa);

    rsa.importKey(this.state.rsa, "public");
    var encPw = rsa.encrypt(this.state.pw, "base64", "utf-8");
    console.log(encPw)
    fetch(CONFIG.HOMEPAGE + "/signin",{
      method:'POST',
      body:JSON.stringify({
        "id" : this.state.id,
        "passEnc" : encPw,
        "name" : this.state.name,
        "phone" : this.state.phone,
        "mail" :this.state.mail,
      })
    }).then(res=>res.text())
    .then(alert("회원가입완료!"))
  }; 
  render() {
    return (
      <div className = "signIn">
        <div>회원 로그인</div>
            ID
            <input type="text" name="id" value={this.state.id} 
            onChange={this.handleIDChange} />
            PW
            <input type="password" name="pw" value={this.state.pw}
            onChange={this.handlePWChange} />
            이름
            <input type="text" name="name" value={this.state.name} 
            onChange={this.handleNameChange} />
            전화번호
            <input type="text" name="phone" value={this.state.phone} 
            onChange={this.handlePhoneChange} />
            이메일
            <input type="text" name="mail" value={this.state.mail} 
            onChange={this.handleMailChange} />
            <button onClick={this.signInSubmit}>제출</button>
      </div>
    )
  }
}
