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
            <div className={this.state.selected === 'home'?"selected":"menuItem"}
            onClick={()=>this.setState({selected:'home'})}>Home</div>
            </Link>
            
          <Link className="link" to="/people">
            <div className={this.state.selected === 'people'?"selected":"menuItem"}
            onClick={()=>this.setState({selected:'people'})}>인사</div>
            </Link>
            
          <Link className="link" to="/profit">
            <div className={this.state.selected === 'profit'?"selected":"menuItem"}
            onClick={()=>this.setState({selected:'profit'})}>재무</div>
            </Link>
            
          <Link className="link" to="/stock">
            <div className={this.state.selected === 'stock'?"selected":"menuItem"}
            onClick={()=>this.setState({selected:'stock'})}>재고</div>
            </Link>
            
          <Link className="link" to="/ticket">
            <div className={this.state.selected === 'ticket'?"selected":"menuItem"}
            onClick={()=>this.setState({selected:'ticket'})}>티켓</div>
            </Link>

        
      </div>
    );
  }
}

export default MenuContainer;