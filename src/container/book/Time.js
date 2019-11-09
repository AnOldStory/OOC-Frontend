import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";


export default class Time extends Component {
  render() {
    return (
      <div>
        time<br/>
        <Link to="/book/seat">Next</Link>
      </div>
    )
  }
}
