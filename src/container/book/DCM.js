import React, { Component } from "react";
import { Link } from "react-router-dom";

import "container/book/BookContainer.scss";

export default class DCM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: ["2019/11/08", "2019/11/09", "2019/11/10", "2019/11/11"],
      cinemas: ["안산", "서울", "평양", "뉴욕"],
      movies: ["어벤져스", "82년생김지영"]
    };
  }
  getDates() {
    fetch()
      .then(res => res.json(res))
      .then(res => {
        this.setState({
          dates: res
        });
      })
      .catch(err => console.log(err));
  }

  getCinemas() {
    fetch()
      .then(res => res.json(res))
      .then(res => {
        this.setState({
          cinemas: res
        });
      })
      .catch(err => console.log(err));
  }
  getMovies() {
    fetch()
      .then(res => res.json(res))
      .then(res => {
        this.setState({
          movies: res
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="DCMContent">
        <div className="date content">
          <div className="title">DATE</div>
          {this.state.dates.map((date, index) => (
            <div
              className="select"
              key={index}
              onClick={() => this.props.setDate(date)}
            >
              {date}
            </div>
          ))}
        </div>
        <div className="cinema content">
          <div className="title">CINEMA</div>
          {this.state.cinemas.map((cinema, index) => (
            <div
              className="select"
              key={index}
              onClick={() => this.props.setCinema(cinema)}
            >
              {cinema}
            </div>
          ))}
        </div>
        <div className="movie content">
          <div className="title">MOVIE</div>
          {this.state.movies.map((movie, index) => (
            <div
              className="select"
              key={index}
              onClick={() => this.props.setMovie(movie)}
            >
              {movie}
            </div>
          ))}
        </div>
        <div className="next">
          <Link to="/book/time">NEXT</Link>
        </div>
      </div>
    );
  }
}
