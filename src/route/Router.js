import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import People from 'container/people/People';
import Profit from 'container/profit/Profit';
import Stock from 'container/stock/Stock';
import Ticket from 'container/ticket/Ticket';

import '../index.scss';

class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      token : '',
    }
    this.tokenHandler = this.tokenHandler.bind(this);
  }

  tokenHandler(e){
    this.setState({token:e})
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <div className="top">
            <div><img src={require('../../src/image/logo2.png')} alt="logo"/>
            ADMINISTRATOR
            {this.state.token != '' && <div className="logout"
            onClick={()=>this.tokenHandler('')}>로그아웃</div>}
             </div>
            <MenuContainer/>
          </div>
          <div className="mainContent">
            <Switch>
              <Route exact path="/"
                component={()=>(<MainContainer
                token={this.state.token}
                tokenHandler={this.tokenHandler}/>)}
              />
                <Route path="/people"
                component={()=>(<People
                token={this.state.token}/>)}
                />
                <Route
                
                path="/profit"
                component={()=>(<Profit
                token={this.state.token}            
                />)}
                />
                <Route
                
                path="/stock"
                component={()=>(<Stock
                token={this.state.token}
                />)}
                />
                <Route
                path="/ticket"
                component={()=>(<Ticket
                token={this.state.token}
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