import React, { Component } from "react";
import {Link} from "react-router-dom";

import Login from 'container/main/Login';


import "./MainContainer.scss";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        {this.props.token ==='' ? <Login
        tokenHandler={this.props.tokenHandler}/>
      :
      <div className="login">
        <div className="logined">
          <Link className="link" to='/people'>
            <div className="menuLink"
            onClick={()=>this.props.menuHandler("people")}>
              <img src={require('./img/people.png')} alt="people"/><br/>
              인사관리</div>
            </Link>
            <Link className="link" to='/profit'>
            <div className="menuLink"
            onClick={()=>this.props.menuHandler("profit")}>
              <img src={require('./img/profit.png')} alt="profit"/><br/>
              재무</div>
            </Link>
            <Link className="link" to='/stock'>
              <div className="menuLink"
              onClick={()=>this.props.menuHandler("stock")}>              
                <img src={require('./img/stock.png')} alt="stock"/><br/>
                재고</div>
            </Link>
            <Link className="link" to='/ticket'>
            <div className="menuLink"
            onClick={()=>this.props.menuHandler("ticket")}>
              <img src={require('./img/ticket.png')} alt="ticket"/><br/>
              티켓</div>
            </Link>
          </div>
        </div>
      }

        
      </div>
    );
  }
}

export default MainContainer;