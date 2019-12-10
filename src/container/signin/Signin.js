import React, { Component } from 'react'
import './Signin.scss';
import CONFIG from '_variables';

const RSA = require('node-rsa');

const rsa = new RSA();

export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            pw : '',
            pos : '',
            sal : '',
            rsa:'',
        }
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handlePwChange = this.handlePwChange.bind(this);
       this.handlePosChange = this.handlePosChange.bind(this);
       this.handleSalChange = this.handleSalChange.bind(this);
       this.singUpSubmit = this.singUpSubmit.bind(this);
       this.getRSA();
    }
    getRSA(){
      fetch(CONFIG.HOMEPAGE+'/admin/personel/signin')
      .then(res=>res.text())
      .then(res=>this.setState({rsa:res}));
    }
    handlePosChange(event) {
        this.setState({pos: event.target.value});                                                                                                                                                           
    }
    handlePwChange(event) {
        this.setState({pw: event.target.value});
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleSalChange(event) {
        this.setState({sal: event.target.value});
    }
    singUpSubmit(event){
      event.preventDefault();

      let idRule = /^[A-Za-z]{1}\w{3,19}$/;
      let pwRule = /^[a-zA-Z0-9]{10,15}$/;

      
      console.log(this.state.rsa);
      if(!idRule.test(this.state.name)) {
        alert("4 ~ 20 자리 영(대, 소), 숫자");
      } else if(!pwRule.test(this.state.pw)) {
        alert('숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.');
      } else if(typeof(this.state.sal * (1)) != "number"){
        alert('1원에서 9999999999원까지 가능합니다')
      } 
      else {
      rsa.importKey(this.state.rsa, "public");
      var encPw = rsa.encrypt(this.state.pw, "base64", "utf-8");
      console.log(encPw)
      fetch(CONFIG.HOMEPAGE + '/admin/personel/signin',{
        method:'POST',
        body:JSON.stringify({
          "name" : this.state.name,
          "passEnc" : encPw,
          "sal" : this.state.sal,
          "pos" : this.state.pos,
        })
    }).then(res=>res.text())
    .then(alert("회원가입완료!"))
  }
  }


    render() {
        return (
            <React.Fragment>
                <div className="Modal-overlay" />
                <div className="Modal">
                <button className="closebutton" onClick={this.props.signinPopupHandler}> X </button>
                    <p className="title">SignUp</p>
                    <div className="content">
                    <form onSubmit={this.singUpSubmit}>
                        <input type="text"
                         name="name" 
                         value={this.state.name} 
                         placeholder="이름"
                        onChange={this.handleNameChange} />
                        <br/>
                        <input type="password" 
                        name="pw" 
                        value={this.state.pw} 
                        placeholder="비밀번호"
                        onChange={this.handlePwChange} />
                        <br/>
                        <input type = "text" 
                        name="sal" 
                        value={this.state.sal} 
                        placeholder="급여"
                        onChange={this.handleSalChange}/>
                        <br/>
                        <select type = "text" 
                        name="pos"
                        value={this.state.pos} 
                        placeholder="직책"
                        onChange={this.handlePosChange}
                        className="select">
                          <option value="manager">manager</option>
                          <option value="saler">saler</option>
                          <option value="staff">card</option>
                          <option value="parttime">parttime</option>

                          </select>
                        <br/>
                        <div className="button-wrap">
                         <input type="submit" value="SignUp" />
                        </div>
                    </form>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
