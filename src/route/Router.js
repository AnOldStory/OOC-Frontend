import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import People from 'container/people/People';
import Profit from 'container/profit/Profit';
import Stock from 'container/stock/Stock';
import Ticket from 'container/ticket/Ticket';

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
            <div className="top">
              <MenuContainer/>
            </div>
          <Switch>
            <Route exact path="/"
              component={MainContainer}
            />
              <Route path="/people"
              component={People}
              />
              <Route
              
              path="/profit"
              component={Profit}
              />
              <Route
              
              path="/stock"
              component={Stock}
              />
              <Route
              
              path="/ticket"
              component={Ticket}
              />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;