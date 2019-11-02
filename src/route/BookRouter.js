import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import BookContainer from "container/book/BookContainer";
import Cinema from "container/book/Cinema";
import Date from "container/book/Date";
import Payment from "container/book/Payment";
import Movie from "container/book/Movie";


class BookRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: this.props.match.url
    };
  }
  render() {
    return (
      <>
      <BookContainer/>
        <Switch>
          <Route path={this.state.route + "/cinema"} component={Cinema} />
          <Route path={this.state.route + "/date"} component={Date} />
          <Route path={this.state.route + "/movie"} component={Movie} />
          <Route path={this.state.route + "/payment"} component={Payment} />
        </Switch>
      </>
    );
  }
}

export default BookRouter;
