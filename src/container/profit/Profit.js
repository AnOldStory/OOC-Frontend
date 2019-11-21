import React, { Component } from 'react'

export default class Profit extends Component {
  render() {
    return (
      <div>
        {!this.props.isLogined && <div>Access denied</div>}
        {this.props.isLogined && 
        <div>
          수익은?  
        </div>}
      </div>
    )
  }
}
