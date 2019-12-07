import React, { Component } from "react";
import { Link } from "react-router-dom";

import "container/book/BookContainer.scss";

import CONFIG from "_variables";

export default class DCM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      cinemas: [],
      movies: [],
      date: "",
      cinema: "",
      movieId: -1,
      movie: ""
    };

    this.getDates();
  }
  dateClick(date) {
    this.setState({
      date: date,
      cinema: "",
      movie: ""
    });
    this.getCinemas(date);
  }

  cinemaClick(cinema) {
    this.setState({
      cinema: cinema,
      movie: ""
    });
    this.getMovies(this.state.date, cinema);
  }

  movieClick(moviedata) {
    this.setState({
      movieId: moviedata.movieId,
      movie: moviedata.movie
    });
  }

  nextClick() {
    this.props.setDate(this.state.date);
    this.props.setCinema(this.state.cinema);
    this.props.setMovieId(this.state.movieId);
    this.props.setMovie(this.state.movie);
  }

  getDates() {
    //examplecode
    fetch(CONFIG.HOMEPAGE + "/book")
      .then(res => res.json(res))
      .then(res => {
        res.map((data, index) => {
          this.setState({
            dates: this.state.dates.includes(data.screeningDate)
              ? this.state.dates
              : [...this.state.dates, data.screeningDate],
            cinemas: [],
            movies: []
          });
        });
        this.setState({
          dates: this.state.dates.sort()
        });
      })
      .catch(err => console.log(err));
  }

  getCinemas(date) {
    //examplecode
    fetch(CONFIG.HOMEPAGE + "/book/?date=" + date)
      .then(res => res.json(res))
      .then(res => {
        res.map((data, index) => {
          this.setState({
            cinemas: []
          });
          this.setState({
            cinemas: this.state.cinemas.includes(data.cinemaId)
              ? this.state.cinemas
              : [...this.state.cinemas, data.cinemaId],
            movies: []
          });
        });
      })
      .catch(err => console.log(err));
  }

  getMovies(date, cinema) {
    //examplecode
    fetch(CONFIG.HOMEPAGE + "/book/?date=" + date + "&cinema=" + cinema)
      .then(res => res.json(res))
      .then(res => {
        res.map((data, index) => {
          this.setState({
            movies: []
          });
          this.setState({
            movies: this.state.movies.includes(data.movieIdSchedule.movieName)
              ? this.state.movies
              : [
                  ...this.state.movies,
                  {
                    movie: data.movieIdSchedule.movieName,
                    movieId: data.movieId
                  }
                ]
          });
        });
      })
      .catch(err => console.log(err));
  }

  showChoose(object) {
    if (
      object === this.state.date ||
      object === this.state.cinema ||
      object === this.state.movie
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="DCMContent">
        <div className="date content">
          <div className=" title">날짜</div>
          {this.state.dates.map((date, index) => (
            <div
              className={this.state.date === date ? "selected" : "select"}
              key={index}
              onClick={() => this.dateClick(date)}
            >
              {date}
            </div>
          ))}
        </div>
        <div className="cinema content">
          <div className="title">영화관</div>
          {this.state.cinemas.map((cinema, index) => (
            <div
              className={this.state.cinema === cinema ? "selected" : "select"}
              key={index}
              onClick={() => this.cinemaClick(cinema)}
            >
              {cinema}
            </div>
          ))}
        </div>
        <div className="movie content">
          <div className="title">영화</div>
          {this.state.movies.map((moviedata, index) => (
            <div
              className={
                this.state.movie === moviedata.movie ? "selected" : "select"
              }
              key={index}
              onClick={() => this.movieClick(moviedata)}
            >
              {moviedata.movie}
            </div>
          ))}
        </div>
        <div className="next" onClick={() => this.nextClick()}>
          <Link className="nextButton" to="/book/time">
            <span className = "movie_next">NEXT</span>
          </Link>
        </div>
      </div>
    );
  }
}
