import React, { Component } from 'react'

export default class Ticket extends Component {
  render() {
    return (
      <div>
        {!this.props.isLogined && <div>Access denied</div>}
        {this.props.isLogined && 
        <div>
          예매내역?  
        </div>}
      </div>
    )
  }
}
