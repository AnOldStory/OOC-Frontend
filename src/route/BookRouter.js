import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import BookContainer from "container/book/BookContainer";
import Payment from "container/book/Payment";
import DCM from "container/book/DCM";
import Seat from "container/book/Seat";
import Time from "container/book/Time";
import Initial from "container/book/Initial";
import Login from "container/login/Login";
import Result from "container/book/Result";

class BookRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "/book",
      result: true,
      token: "",
      id: this.props.id
    };
  }

  render() {
    return (
      <>
        <BookContainer
          cinema={this.props.cinema}
          movie={this.props.movie}
          date={this.props.date}
          time={this.props.time}
          seat={this.props.seat}
        />
        <Switch>
          <Route
            exact
            path={this.state.route}
            component={() => (
              <DCM
                time={this.props.time}
                setCinema={this.props.cinemaHandler}
                setDate={this.props.dateHandler}
                setMovieId={this.props.movieIdHandler}
                setMovie={this.props.movieHandler}
                cinema={this.props.cinema}
                movieId={this.props.movieId}
                movie={this.props.movie}
                date={this.props.date}
              />
            )}
          />
          <Route
            path={this.state.route + "/time"}
            component={() => (
              <Time
                setTime={this.props.timeHandler}
                setScreen={this.props.screenHandler}
                cinema={this.props.cinema}
                date={this.props.date}
                movie={this.props.movie}
                movieId={this.props.movieId}
                time={this.props.time}
                screen={this.props.screen}
              />
            )}
          />
          <Route
            path={this.state.route + "/seat"}
            component={() => (
              <Seat
                setSeat={this.props.seatHandler}
                seat={this.props.seat}
                token={this.props.token}
              />
            )}
          />

          <Route
            path={this.state.route + "/payment"}
            component={() =>
              this.props.token === "" ? (
                <Login
                  tokenHandler={this.props.tokenHandler}
                  time={this.props.time}
                  screen={this.props.screen}
                  settoken={this.props.tokenHandler}
                  token={this.props.token}
                  id={this.props.id}
                />
              ) : (
                <Payment
                  cinema={this.props.cinema}
                  movieId={this.props.movieId}
                  movie={this.props.movie}
                  date={this.props.date}
                  time={this.props.time}
                  screen={this.props.screen}
                  seat={this.props.seat}
                  token={this.props.token}
                />
              )
            }
          />

          <Route
            path={this.state.route + "/result"}
            component={() => (
              <Result
                result={this.state.result}
                cinema={this.props.cinema}
                movieId={this.props.movieId}
                movie={this.props.movie}
                date={this.props.date}
                time={this.props.time}
                screen={this.props.screen}
                seat={this.props.seat}
                initialize={this.props.initializeState}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default BookRouter;
