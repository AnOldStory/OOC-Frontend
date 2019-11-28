import React, { Component } from 'react'


export default class MainLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
      isMemberLogin : false,
    }
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);

  }
  handleIDChange(e){
    this.setState({id:e.target.value})
  }
  handlePWChange(e){
    this.setState({pw:e.target.value})
  }
  loginSubmit(){
    this.props.LoginHandler()
  }
  noLoginSubmit(){

  }

  render() {
    return (
      <div>
        <div className="login content">
            ID
            <input type="text" name="id" value={this.state.id} 
            onChange={this.handleIDChange} />
            PW
            <input type="password" name="pw" value={this.state.pw}
            onChange={this.handlePWChange} />
            <button id = "login" onClick={this.props.tokenHandler}>로그인</button>
        </div>    
      </div>
    )
  }
}

