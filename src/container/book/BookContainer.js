import React, { Component } from "react";
import "./BookContainer.scss";


class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="container">
        <div className="state">
          <div className={this.props.date==="선택 전"?'eachstate':'eachstateafter'}>DATE 
            {this.props.date}
          </div>

          <div className={this.props.cinema==="선택 전"?'eachstate':'eachstateafter'}>CINEMA 
            {this.props.cinema}
          </div>

          <div className={this.props.movie==="선택 전"?'eachstate':'eachstateafter'}>MOVIE 
            {this.props.movie}
          </div>

          <div className={this.props.time==="선택 전"?'eachstate':'eachstateafter'}>TIME 
            {this.props.time}
          </div>

          <div className={this.props.seat.length===0?'eachstate':'eachstateafter'}>SEAT 
            {this.props.seat.join()}
          </div>
          
        </div>
      </div>
    );
  }
}

export default BookContainer;
