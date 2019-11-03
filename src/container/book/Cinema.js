import React, { Component } from 'react'
import CinemaMap from 'container/book/CinemaMap';
import { Link } from "react-router-dom";

import "./BookContainer.scss";


export default class Cinema extends Component {
  render() {
    return (
      <div className="bookContent">
        <span>영화관선택</span>
          <div className="selectDiv">
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
        <div className="map">
          <CinemaMap />
        </div>
      </div>
    )
  }
}
