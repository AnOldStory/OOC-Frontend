import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import BookRouter from "route/BookRouter";
import Ticket from "container/ticket/Ticket";

import MainLogin from "container/login/MainLogin";


class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      token:"",
      isLoggedin:false,
      cinema: "선택 전",
      movie: "선택 전",
      date: "선택 전",
      time: "선택 전",
      seat: [],
    }
    this.tokenHandler = this.tokenHandler.bind(this);
    this.dateHandler = this.dateHandler.bind(this);
    this.cinemaHandler = this.cinemaHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.seatHandler = this.seatHandler.bind(this);
    this.initializeState = this.initializeState.bind(this);
  }
  tokenHandler(){
    this.setState({token:"asdf"});
  }
  dateHandler = e => {
    this.setState({ date: e });
  };
  cinemaHandler = e => {
    this.setState({ cinema: e });
  };
  movieHandler = e => {
    this.setState({ movie: e });
  };
  timeHandler = e => {
    this.setState({ time: e });
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
  initializeState(){
    this.forceUpdate();
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <MenuContainer />
          {(this.state.token == "") && 
          <MainLogin tokenHandler={this.tokenHandler}/>}
          token = {this.state.token}
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/book" component={
              ()=><BookRouter 
              tokenHandler={this.tokenHandler}
              dateHandler={this.dateHandler}
              cinemaHandler={this.cinemaHandler}
              movieHandler={this.movieHandler}
              timeHandler={this.timeHandler}
              seatHandler={this.seatHandler}
              token={this.state.token}
              cinema={this.state.cinema}
              movie={this.state.movie}
              date={this.state.date}
              seat={this.state.seat}
              time={this.state.time}
              initializeState={this.initializeState}
              />} />
            <Route path="/ticket" component={()=><Ticket token={this.state.token}/>}/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
