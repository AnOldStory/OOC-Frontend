import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import BookContainer from "container/book/BookContainer";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <MenuContainer/>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <MainContainer/>
              )}
            />
            <Route
              exact
              path="/book"
              component={() => (
                <BookContainer/>
              )}
              />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;