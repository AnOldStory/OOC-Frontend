import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import BookContainer from "container/book/BookContainer";
import Payment from "container/book/Payment";
import DCM from "container/book/DCM";
import Seat from "container/book/Seat";
import Time from "container/book/Time";
import Initial from "container/book/Initial";
import Login from "container/login/Login";

class BookRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: this.props.match.url,
      cinema: "선택 전",
      movie: "선택 전",
      date: "선택 전",
      time: "선택 전",
      seat: [],
      token : "",
    };
    this.dateHandler = this.dateHandler.bind(this);
    this.cinemaHandler = this.cinemaHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.seatHandler = this.seatHandler.bind(this);
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
  tokenHandler = e => {
    this.setState({token:e})
  }
  render() {
    return (
      <>
        <BookContainer
          cinema={this.state.cinema}
          movie={this.state.movie}
          date={this.state.date}
          time={this.state.time}
          seat={this.state.seat}
        />
        <Switch>
          <Route exact path={this.state.route} component={Initial} />
          <Route
            path={this.state.route + "/dcm"}
            component={() => (
              <DCM
                time = {this.state.time}
                setCinema={this.cinemaHandler}
                setDate={this.dateHandler}
                setMovie={this.movieHandler}
                cinema={this.state.cinema}
                movie={this.state.movie}
                date={this.state.date}
              />
            )}
          />
          <Route
            path={this.state.route + "/time"}
            component={() => <Time setTime={this.timeHandler} />}
          />
          <Route
            path={this.state.route + "/seat"}
            component={() => (
              <Seat setSeat={this.seatHandler} seat={this.state.seat} token={this.state.token} />
            )}
          />
          
          <Route path={this.state.route + "/payment"} component={()=>this.state.token ===""
          ?<Login tokenHandler={this.tokenHandler} token={this.token}/>
          :<Payment 
          cinema={this.state.cinema}
          movie={this.state.movie}
          date={this.state.date}
          time={this.state.time}
          seat={this.state.seat} />} />
        </Switch>
      </>
    );
  }
}

export default BookRouter;
