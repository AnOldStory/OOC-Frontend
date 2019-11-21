import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import People from 'container/people/People';
import Profit from 'container/profit/Profit';
import Stock from 'container/stock/Stock';
import Ticket from 'container/ticket/Ticket';


class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogined : true,
      id : '',
    }
    this.LoginHandler = this.LoginHandler.bind(this);
    this.LogoutHandler = this.LogoutHandler.bind(this);
  }

  LoginHandler(){
    this.setState({isLogined : true});
  }
  LogoutHandler(){
    this.setState({isLogined:false});
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <div className="top">
            <MenuContainer/>
          </div>
          <div className="mainContent">
            <Switch>
              <Route exact path="/"
                component={()=>(<MainContainer
                id={this.state.id}
                isLogined={this.state.isLogined}
                LoginHandler={this.LoginHandler}
                LogoutHandler={this.LogoutHandler}/>)}
              />
                <Route path="/people"
                component={()=>(<People
                isLogined={this.state.isLogined}/>)}
                />
                <Route
                
                path="/profit"
                component={()=>(<Profit
                isLogined={this.state.isLogined}              
                />)}
                />
                <Route
                
                path="/stock"
                component={()=>(<Stock
                isLogined={this.state.isLogined}              
                />)}
                />
                <Route
                path="/ticket"
                component={()=>(<Ticket
                isLogined={this.state.isLogined}
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