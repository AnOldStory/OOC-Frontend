import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import BookRouter from "route/BookRouter";
import Shop from "container/shop/Shop";
import MyPage from "container/mypage/MyPage";
import Chart from "container/chart/Chart";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <MenuContainer />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/book" component={BookRouter} />
            <Route path="/chart" component={Chart} />
            <Route path="/shop" component={Shop} />
            <Route path="/mypage" component={MyPage} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
