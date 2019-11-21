import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
    };
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);

  }
  handleIDChange(event){
    this.setState({id:event.target.value})
  }
  handlePWChange(event){
    this.setState({pw:event.target.value})
  }
  loginSubmit(){
    
  }
  render() {
    return (
      <div className="loginContent">
        {!this.props.isLogined &&
          <div className="loginComponent">
          <input type="text" name="id" value={this.state.id} onChange={this.handleIDChange} />
          <br/>
          <input type="password" name="id" value={this.state.pw} onChange={this.handlePWChange} />
          <div className="loginButton">Login</div>
        </div>}
      </div>
    )
  }
}
