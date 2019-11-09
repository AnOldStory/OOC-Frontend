import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Initial extends Component {
  render() {
    return (
      <div>
        <Link to="/book/dcm">예매하기!</Link>
      </div>
    )
  }
}
