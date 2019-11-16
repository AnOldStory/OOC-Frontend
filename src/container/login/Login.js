import React, { Component } from 'react'
import './Login.scss';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
      name : '',
      phone : '',
      isMemberLogin : false,
    }
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

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
    event.preventDefault();
    fetch('/login', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
        "id": this.state.id,
        "pw" : this.state.pw,
      }
    }).then(res => res.json(res))
    .then(res=>this.props.tokenHandler(res));
  }; 
  noLoginSubmit=(event)=>{
    event.preventDefault();
    fetch('/login', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
        "name": this.state.name,
        "phone" : this.state.phone,
      }
    }).then(res => res.json(res))
    .then(res=>this.props.tokenHandler(res));
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
            <button onClick={()=>this.props.tokenHandler}>login</button>
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
