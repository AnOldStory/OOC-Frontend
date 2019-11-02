import React, { Component } from "react";
import "./BookContainer.scss";

const seats = [
  {row:'A',col:'1'},{row:'A',col:'2'},{row:'A',col:'3'},{row:'A',col:'4'},{row:'A',col:'5'},
  {row:'A',col:'6'},{row:'A',col:'7'},{row:'A',col:'8'},{row:'A',col:'9'},{row:'A',col:'10'},
  {row:'B',col:'1'},{row:'B',col:'2'},{row:'B',col:'3'},{row:'B',col:'4'},{row:'B',col:'5'},
  {row:'B',col:'6'},{row:'B',col:'7'},{row:'B',col:'8'},{row:'B',col:'9'},{row:'B',col:'10'}
];

class BookContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cinema : '영화관',
      movie : '영화',
      date : '날짜',
      time : '시간',
      seat : ['공석'],
    }
  }
  render() {
    
    return (
      <div className="container">

        <div className="top">예매</div>

        <div className="step">
          영화관={this.state.cinema}
          <br/>
          영화={this.state.movie}
          <br/>
          날짜={this.state.date}      
        </div>
        <div className="cinema">cinema <hr/>
          
        </div>
        
        <div className="movie">movie <hr/>
        </div>
        <br/>
        
        <div className="date">date <hr/>
        </div>
        <div className="time">time <hr/>
        </div>

        <div className="seat">seats <hr/>
          
        </div>
      </div>
    );
  }
}

export default BookContainer;