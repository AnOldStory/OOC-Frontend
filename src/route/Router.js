import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";

import MainContainer from "container/main/MainContainer";
import BookRouter from "route/BookRouter";
import Ticket from "container/ticket/Ticket";
import Signin from "container/signin/Signin";

import Footer from "container/footer/FooterContainer";

import "antd/dist/antd.css";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      member: false,
      cinema: "선택 전",
      movieId: -1,
      movie: "선택 전",
      date: "선택 전",
      time: "선택 전",
      screen: 0,
      seat: [],
      showroom: ""
    };
    this.tokenHandler = this.tokenHandler.bind(this);
    this.memberHandler = this.memberHandler.bind(this);
    this.dateHandler = this.dateHandler.bind(this);
    this.cinemaHandler = this.cinemaHandler.bind(this);
    this.movieIdHandler = this.movieIdHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.screenHandler = this.screenHandler.bind(this);
    this.seatHandler = this.seatHandler.bind(this);
    this.initializeState = this.initializeState.bind(this);
    this.showroomHandler = this.showroomHandler.bind(this);
    this.memberLogout = this.memberLogout.bind(this);
  }
  memberLogout = () => {
    this.setState({ token: "", member: false });
  };
  tokenHandler = e => {
    this.setState({ token: e });
  };
  memberHandler = e => {
    this.setState({ member: e });
  };
  showroomHandler = e => {
    this.setState({ showroom: e });
  };
  dateHandler = e => {
    this.setState({ date: e });
  };
  cinemaHandler = e => {
    this.setState({ cinema: e });
  };
  movieIdHandler = e => {
    this.setState({ movieId: e });
  };
  movieHandler = e => {
    this.setState({ movie: e });
  };
  timeHandler = e => {
    this.setState({ time: e.time, screen: e.screen, showroom: e.showRoomId });
  };
  screenHandler = e => {
    this.setState({ screen: e });
  };
  seatHandler = e => {
    console.log(e);
    let newSeat = this.state.seat;
    if (newSeat.includes(e)) {
      newSeat.splice(newSeat.indexOf(e), 1);
      console.log(newSeat);
    } else {
      newSeat.push(e);
      this.setState({ seat: newSeat });
    }
  };
  initializeState() {
    this.setState({
      cinema: "선택 전",
      movieId: -1,
      movie: "선택 전",
      date: "선택 전",
      time: "선택 전",
      screen: 0,
      seat: []
    });
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <MenuContainer
            token={this.state.token}
            tokenHandler={this.tokenHandler}
            initializeState={this.initializeState}
            memberHandler={this.memberHandler}
            member={this.state.member}
            memberLogout={this.memberLogout}
          />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route
              path="/book"
              render={props => (
                <BookRouter
                  {...props}
                  tokenHandler={this.tokenHandler}
                  memberHandler={this.memberHandler}
                  dateHandler={this.dateHandler}
                  cinemaHandler={this.cinemaHandler}
                  movieIdHandler={this.movieIdHandler}
                  movieHandler={this.movieHandler}
                  timeHandler={this.timeHandler}
                  screenHandler={this.screenHandler}
                  seatHandler={this.seatHandler}
                  showroomHandler={this.showroomHandler}
                  token={this.state.token}
                  member={this.state.member}
                  cinema={this.state.cinema}
                  movieId={this.state.movieId}
                  movie={this.state.movie}
                  date={this.state.date}
                  seat={this.state.seat}
                  time={this.state.time}
                  screen={this.state.screen}
                  initializeState={this.initializeState}
                  showroom={this.state.showroom}
                />
              )}
            />
            <Route
              path="/ticket"
              render={props => (
                <Ticket
                  {...props}
                  token={this.state.token}
                  member={this.state.member}
                  tokenHandler={this.tokenHandler}
                  memberHandler={this.memberHandler}
                />
              )}
            />

            <Route
              path="/signin"
              render={props => <Signin {...props} token={this.state.token} />}
            />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
