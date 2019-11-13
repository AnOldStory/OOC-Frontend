import React, { Component } from "react";
import { Link } from "react-router-dom";

import "container/book/BookContainer.scss";

export default class DCM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      cinemas: [],
      movies: []
    };
  }

  componentDidMount() {
    this.getDates();
  }

  getDates() {
    //examplecode
    this.setState({
          dates: ["2019/11/08", "2019/11/09", "2019/11/10", "2019/11/11"],
          cinemas : [],
          movies : []
        }); //
    fetch("/book/getDate")
      .then(res => res.json(res))
      .then(dates => {
        this.setState({
          dates: dates,
          cinemas : [],
          movies : []
        });
      })
      .catch(err => console.log(err));
  }

  getCinemas(date) {
    //examplecode
    this.setState({
          cinemas: ["안산", "서울", "평양", "뉴욕"],
          movies : []
        }); //
    fetch("book/getCinema?date="+date)
      .then(res => res.json(res))
      .then(cinemas => {
        this.setState({
          cinemas: cinemas,
          movies : []
        });
      })
      .catch(err => console.log(err));
  }
  getMovies(date, cinema) {
    //examplecode
    this.setState({
          movies: ["어벤져스", "82년생김지영"]
        }); //
    fetch("book/getMovies?date="+date+"&cinema="+cinema)
      .then(res => res.json(res))
      .then(movies => {
        this.setState({
          movies: movies
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
              onClick={() => this.props.setDate(date), () => this.getCinemas(date)}
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
              onClick={() => this.props.setCinema(cinema), () => this.getMovies(this.props.date, cinema)}
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
