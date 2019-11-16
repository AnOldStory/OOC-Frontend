import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import BookRouter from "route/BookRouter";
import Ticket from "container/ticket/Ticket";

import MainLogin from "container/login/MainLogin";


class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      token:"",
      isLoggedin:false,
    }
    this.LoginHandler = this.LoginHandler.bind(this);
  }
  LoginHandler(){
    this.setState({token:"asdf"});
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <MenuContainer />
          {this.state.token}
          {(this.state.token == "") && 
          <MainLogin LoginHandler={this.LoginHandler}/>}
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/book" component={
              ()=><BookRouter LoginHandler={this.state.LoginHandler} token={this.state.token}/>} />
            <Route path="/ticket" component={()=><Ticket token={this.state.token}/>}/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
