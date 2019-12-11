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
    console.log(this.props)
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
            render={(props) => (
              <DCM
              {...props}
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
            render={(props) => (
              <Time
              {...props}
                setTime={this.props.timeHandler}
                setScreen={this.props.screenHandler}
                showroomHandler={this.props.showroomHandler}
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
            render={(props) => (
              <Seat
              {...props}
                cinema={this.props.cinema}
                date={this.props.date}
                movieId={this.props.movieId}
                time={this.props.time}
                setSeat={this.props.seatHandler}
                seat={this.props.seat}
                token={this.props.token}
              />
            )}
          />

          <Route
            path={this.state.route + "/payment"}
            render={(props) =>
              this.props.token === "" ? (
                <Login
                {...props}
                  tokenHandler={this.props.tokenHandler}
                  time={this.props.time}
                  screen={this.props.screen}
                  settoken={this.props.tokenHandler}
                  token={this.props.token}
                  id={this.props.id}
                  memberHandler={this.props.memberHandler}
                />
              ) : (
                <Payment
                {...props}
                  cinema={this.props.cinema}
                  movieId={this.props.movieId}
                  movie={this.props.movie}
                  date={this.props.date}
                  time={this.props.time}
                  screen={this.props.screen}
                  seat={this.props.seat}
                  showroom={this.props.showroom}
                  token={this.props.token}
                />
              )
            }
          />

          <Route
            path={this.state.route + "/result"}
            render={(props) => (
              <Result
              {...props}
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
