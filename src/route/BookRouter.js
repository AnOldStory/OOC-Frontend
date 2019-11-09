import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import BookContainer from "container/book/BookContainer";
import Payment from "container/book/Payment";
import DCM from 'container/book/DCM';
import Seat from 'container/book/Seat';
import Time from 'container/book/Time';

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
          <Route path={this.state.route + "/dcm"} component={DCM} />
          <Route path={this.state.route + "/time"} component={Time} />
          <Route path={this.state.route + "/seat"} component={Seat} />
          <Route path={this.state.route + "/payment"} component={Payment} />
        </Switch>
      </>
    );
  }
}

export default BookRouter;
