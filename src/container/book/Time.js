import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const aws = "http://ec2-54-180-119-225.ap-northeast-2.compute.amazonaws.com:3000";

export default class Time extends Component {
  constructor(props){
    super(props);
    this.state = {
      times : [],
    }
  }
  componentDidMount(){
    // fetch("book/getCinema?date="+this.props.date+"&cinema="+this.props.cinema+"&movie="+this.props.movie)
    //   .then(res => res.json(res))
    //   .then(res => {
    //     this.setState({
    //       times: res
    //     });
    //   })
    //   .catch(err => console.log(err));

    fetch(aws + "/book/?date=" +this.props.date+"&cinema="+this.props.cinema+"&movie="+this.props.movieId)
      .then(res => res.json(res))
      .then(res => {
        console.log(res)
        // res.map((data, index) => {
        //   this.setState({
        //   dates: this.state.dates.includes(data.screeningDate) ? this.state.dates : [...this.state.dates, data.screeningDate],
        //   cinemas : [],
        //   movies : []
        // });
        // })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="timeContent">
        <div className="title">Time</div>
        <div className="times">
          {this.state.times.map((time, index) => 
          (<div className={time==this.props.time?"selectedtime":"unselectedtime"}
          key={index} onClick={()=>this.props.setTime(time)}>{time}<br/>
          {(time.substring(0,2) >= 22 || time.substring(0,2) < 6 ?"심야":(time.substring(0,2) >= 6 && time.substring(0,2) < 10 ? "조조" : "일반"))}
          </div>))}
        </div>
        <div className="next">
          <Link className="nextButton" to="/book/seat"><span>NEXT</span></Link>
        </div>
      </div>
    )
  }
}
