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
          dates: ["2019/11/08", "2019/11/09", "2019/11/10", "2019/11/11", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09", "2019/11/09"],
        }); //
    fetch("/book/getDate")
      .then(res => res.json(res))
      .then(res => {
        this.setState({
          dates: this.state.dates
        });
      })
      .catch(err => console.log(err));
  }

  getCinemas(date) {
    //examplecode
    if(date === "2019/11/08") {
    
      this.setState({
            cinemas: ["안산", "서울", "평양", "뉴욕"],
            movies : []
          }); 
    } //
    else{
      this.setState({
            cinemas: ["서울", "평양", "뉴욕"],
            movies : []
          }); 
    }
    fetch("book/getCinema?date="+date)
      .then(res => res.json(res))
      .then(res => {
        this.setState({
          cinemas: res
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
          <div className="title">날짜</div>
          {this.state.dates.map((date, index) => (
            <div
              className={this.state.date===date? "selected":"select"}
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
              className={this.state.cinema===cinema? "selected":"select"}
              key={index}
              onClick={() => this.cinemaClick(cinema)}
            >
              {cinema}
            </div>
          ))}
        </div>
        <div className="movie content">
          <div className="title">영화</div>
          {this.state.movies.map((movie, index) => (
            <div
              className={this.state.movie===movie? "selected":"select"}
              key={index}
              onClick={() => this.movieClick(movie)}
            >
              {movie}
            </div>
          ))}
        </div>
        <div className="next" onClick={() => this.nextClick()}>
          <Link className="nextButton" to="/book/time"><span>NEXT</span></Link>
        </div>
      </div>
    );
  }
}