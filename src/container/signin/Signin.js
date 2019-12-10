import React, { Component } from "react";
import { Button} from "antd";
import "./Signin.scss";
import CONFIG from "_variables";

const RSA = require("node-rsa");

const rsa = new RSA();

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      name: "",
      phone: "",
      mail: "",
      rsa: ""
    };
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.getRSA();
  }
  getRSA() {
    fetch(CONFIG.HOMEPAGE + "/signin")
      .then(res => res.text())
      .then(res => {
        this.setState({ rsa: res });
      });
  }
  handleIDChange(e) {
    this.setState({ id: e.target.value });
  }
  handlePWChange(e) {
    this.setState({ pw: e.target.value });
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }
  handleMailChange(e) {
    this.setState({ mail: e.target.value });
  }

  signInSubmit = event => {
    event.preventDefault();
    //console.log(this.state.rsa);

    rsa.importKey(this.state.rsa, "public");
    var encPw = rsa.encrypt(this.state.pw, "base64", "utf-8");
    //console.log(encPw)
    let idRule = /^[A-Za-z]{1}\w{3,19}$/;
    let pwRule = /^[a-zA-Z0-9]{10,15}$/;

    let mailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let phoneRule1 = /^\d{3}-\d{3,4}-\d{4}$/;
    let phoneRule2 = /^\d{10,11}$/;

    // if(!idRule.test(this.state.id)) {
    //   alert("4 ~ 20 자리 영(대, 소), 숫자");
    // } else if(!pwRule.test(this.state.pw)) {
    //   alert('숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.');
    // } else if(!mailRule.test(this.state.email)) {
    //   alert("메일주소 형식이 올바르지 않습니다.");
    // } else if (!phoneRule1.test(this.state.phone) && !phoneRule2.test(this.state.phone)) {
    //   alert("전화번호 형식이 올바르지 않습니다.");
    // } else {
    fetch(CONFIG.HOMEPAGE + "/signin", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.id,
        passEnc: encPw,
        name: this.state.name,
        phone: this.state.phone,
        mail: this.state.mail
      })
    })
      .then(res => console.log(res))
      .then(alert("회원가입완료!"));
    // }
  };
  render() {
    return (
      <div className="signIn">
        <div className = "sign_in">
        <div className="SignIn001">
          <h1>Sign In</h1>
          
          Please fill in this form to create an account.
          </div>
        <br />
        
        <div className = "part_signin">
        <span className="txt">ID</span>
        <br />
        <input
          className="input002"
          type="text"
          name="id"
          value={this.state.id}
          onChange={this.handleIDChange}
        />
        </div>
        <br />
        <div className = "part_signin">
        <span className="txt">PW</span>
        <br />
        <input
          className="input002"
          type="password"
          name="pw"
          value={this.state.pw}
          onChange={this.handlePWChange}
        />
        </div>
        <br />
        <div className = "part_signin">
        <span className="txt"> Name</span>
        <br />
        <input
          className="input002"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        </div>
        <br />
        <div className = "part_signin">
        <span className="txt">PhoneNumber</span>
        <br />
        <input
          className="input002"
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handlePhoneChange}
        />
        </div>
        <br />
        
        <div className = "part_signin">
        <span className="txt">Email</span>
        <br />
        <input
          className="input002"
          type="text"
          name="mail"
          value={this.state.mail}
          onChange={this.handleMailChange}
        />
        </div>

        <br />
        
        <Button onClick={this.signInSubmit}>Submit</Button>
      </div>
      </div>
    );
  }
}
