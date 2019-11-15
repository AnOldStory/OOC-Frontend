import React, { Component } from "react";
import { Link } from "react-router-dom";

import "container/book/BookContainer.scss";

export default class DCM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      cinemas: [],
      movies: [],
      date : "",
      cinema : "",
      movie : ""
    };
  }

  componentDidMount() {
    this.getDates();
  }

  dateClick(date) {
    this.setState({
      date : date,
      cinema : "",
      movie : ""
    })
    this.getCinemas(date)
  }

  cinemaClick(cinema) {
    this.setState({
      cinema : cinema,
      movie : ""
    })
    this.getMovies(this.state.date ,cinema)
  }

  movieClick(movie) {
    this.setState({
      movie : movie
    })
  }

  nextClick() {
    this.props.setDate(this.state.date)
    this.props.setCinema(this.state.cinema)
    this.props.setMovie(this.state.movie)
  }

  getDates() {
    //examplecode
    this.setState({
          dates: ["2019/11/08", "2019/11/09", "2019/11/10", "2019/11/11"],
        }); //
    fetch("/book/getDate")
      .then(res => res.json(res))
      .then(dates => {
        this.setState({
          dates: dates
        });
      })
      .catch(err => console.log(err));
  }

  getCinemas(date) {
    //examplecode
    if(date == "2019/11/08") {
    
      this.setState({
            cinemas: ["안산", "서울", "평양", "뉴욕"],
            movies : []
          }); 
    }
    else{
      this.setState({
            cinemas: ["서울", "평양", "뉴욕"],
            movies : []
          }); 
    } //
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

  showChoose(object)
  {
    if (object == this.state.date || object == this.state.cinema || object == this.state.movie){
      return true
    }
    else {
      return false
    }
  }

  render() {
    return (

      <div className="DCMContent">
        <div className="date content">
          <div className="title">DATE</div>
          {this.state.dates.map((date, index) => (
            <div
              className={this.showChoose(date) ? "choose": "select"}
              key={index}
              onClick={() => this.dateClick(date)}
            >
              {date}
            </div>
          ))}
        </div>
        <div className="cinema content">
          <div className="title">CINEMA</div>
          {this.state.cinemas.map((cinema, index) => (
            <div
              className={this.showChoose(cinema) ? "choose": "select"}
              key={index}
              onClick={() => this.cinemaClick(cinema)}
            >
              {cinema}
            </div>
          ))}
        </div>
        <div className="movie content">
          <div className="title">MOVIE</div>
          {this.state.movies.map((movie, index) => (
            <div
              className={this.showChoose(movie) ? "choose": "select"}
              key={index}
              onClick={() => this.movieClick(movie)}
            >
              {movie}
            </div>
          ))}
        </div>
        <div className="next" onClick={() => this.nextClick()}>
          <Link to="/book/time">NEXT</Link>
        </div>
      </div>
    );
  }
}