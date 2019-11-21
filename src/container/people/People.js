import React, { Component } from 'react'

export default class People extends Component {
  render() {
    return (
      <div>
        {!this.props.isLogined && <div>Access denied</div>}
        {this.props.isLogined && 
        <div>
          인사관리?  
        </div>}
      </div>
    )
  }
}
