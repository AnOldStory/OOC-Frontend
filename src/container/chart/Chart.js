import React, { Component } from 'react'
import "./Chart.scss";
import ChartLoad from './ChartLoad';

export default class Chart extends Component {
  render() {
    return (
      <div>
        <div className="top">일간 영화 차트</div>
        <div className="ChartContent">
          <ChartLoad/>
        </div>
      </div>
    )
  }
}
