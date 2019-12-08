import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import People from 'container/people/People';
import Profit from 'container/profit/Profit';
import Stock from 'container/stock/Stock';
import Ticket from 'container/ticket/Ticket';
import Signin from 'container/signin/Signin';

import '../index.scss';

class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu:'home',
      token : 'd',
      signinPopup:false,
    }
    this.tokenHandler = this.tokenHandler.bind(this);
    this.signinPopupHandler = this.signinPopupHandler.bind(this);
    this.menuHandler = this.menuHandler.bind(this);
  }

  menuHandler(e){
    this.setState({menu:e})
  }
  tokenHandler(e){
    this.setState({token:e})
  }
  signinPopupHandler(){
    this.setState({signinPopup : !this.state.signinPopup})
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <>
            {this.state.signinPopup &&
            <Signin signinPopupHandler={this.signinPopupHandler}/>}

          <div className="top">
            <div><img src={require('../../src/image/logo2.png')} alt="logo"/>
            ADMINISTRATOR
            {this.state.token != '' ? <div className="logout"
            onClick={()=>this.tokenHandler('')}>로그아웃</div>
          :
          <div className="signin"
          onClick={()=>this.setState({signinPopup:true})}>회원가입</div>}
             </div>
            <MenuContainer
            menuHandler={this.menuHandler}
            menu={this.state.menu}/>
          </div>
          <div className="mainContent">
            <Switch>
              <Route exact path="/"
                component={()=>(<MainContainer
                token={this.state.token}
                tokenHandler={this.tokenHandler}
                menuHandler={this.menuHandler}
                menu={this.state.menu}/>)}
              />
                <Route path="/people"
                component={()=>(<People
                token={this.state.token}
                tokenHandler={this.tokenHandler}/>)}
                />
                <Route
                
                path="/profit"
                component={()=>(<Profit
                token={this.state.token}
                tokenHandler={this.tokenHandler}           
                />)}
                />
                <Route
                
                path="/stock"
                component={()=>(<Stock
                token={this.state.token}
                tokenHandler={this.tokenHandler}
                />)}
                />
                <Route
                path="/ticket"
                component={()=>(<Ticket
                token={this.state.token}
                tokenHandler={this.tokenHandler}
                  />)}
                />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;