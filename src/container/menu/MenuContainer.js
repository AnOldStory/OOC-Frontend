import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MenuContainer.scss";


class MenuContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      selected : 'home',
    }
  }
  render() {
    return (
      <div className="menu">
        
          
          <Link className="link" to="/">
            <div className={this.props.menu === 'home'?"selected":"menuItem"}
            onClick={()=>this.props.menuHandler('home')}>Home</div>
            </Link>
            
          <Link className="link" to="/people">
            <div className={this.props.menu === 'people'?"selected":"menuItem"}
            onClick={()=>this.props.menuHandler('people')}>인사</div>
            </Link>
            
            
          <Link className="link" to="/stock">
            <div className={this.props.menu === 'stock'?"selected":"menuItem"}
            onClick={()=>this.props.menuHandler('stock')}>재고</div>
            </Link>
            
          <Link className="link" to="/ticket">
            <div className={this.props.menu === 'ticket'?"selected":"menuItem"}
            onClick={()=>this.props.menuHandler('ticket')}>티켓</div>
            </Link>

        
      </div>
    );
  }
}

export default MenuContainer;