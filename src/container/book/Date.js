import React, { Component } from 'react'
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Date extends Component {
  render() {
    return (
      <div className="bookContent">
        <span>Date</span>
        <DatePicker
              dateFormat="MM/DD/YYYY"
            />
        <Link to="/book/movie">next</Link>

      </div>
    )
  }
}
