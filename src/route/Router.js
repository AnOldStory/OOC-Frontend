import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import BookRouter from "route/BookRouter";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <MenuContainer />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/book" component={BookRouter} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
