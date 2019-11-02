import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import BookContainer from "container/book/BookContainer";
import Shop from "container/shop/Shop";
import MyPage from "container/mypage/MyPage";

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
            <Route
              exact
              path="/shop"
              component={() => (
                <Shop/>
              )}
              />
              <Route
              exact
              path="/mypage"
              component={() => (
                <MyPage/>
              )}
              />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;