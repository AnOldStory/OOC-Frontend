import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Date extends Component {
  render() {
    return (
      <div className="bookContent">
        Date        
        <Link to="/book/movie">next</Link>

      </div>
    )
  }
}
