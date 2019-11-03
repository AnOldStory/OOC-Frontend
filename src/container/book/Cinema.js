import React, { Component } from 'react'
import "./BookContainer.scss";
import { Link } from "react-router-dom";

export default class Cinema extends Component {
  render() {
    return (
      <div className="bookContent">
        <span>영화관선택</span>
        <form>
        <div className="radio">
          <label>
            <input type="radio" name="cinema" value="option1" />
            Seoul
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="cinema" value="option2" />
            Ansan
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="cinema" value="option3" />
            Busan
          </label>
        </div>
      </form>
      </div>
    )
  }
}
