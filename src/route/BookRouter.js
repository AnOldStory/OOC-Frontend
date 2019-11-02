import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import BookContainer from "container/book/BookContainer";

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
        <Switch>
          <Route
            exact
            path={this.state.route + "/"}
            component={BookContainer}
          />
          <Route path={this.state.route + "/what"} component={BookContainer} />
          <Route path={this.state.route + "/do"} component={BookContainer} />
          <Route path={this.state.route + "/you"} component={BookContainer} />
          <Route path={this.state.route + "/want"} component={BookContainer} />
          <Route path={this.state.route + "/for"} component={BookContainer} />
          <Route path={this.state.route + "/this"} component={BookContainer} />
        </Switch>
      </>
    );
  }
}

export default BookRouter;
