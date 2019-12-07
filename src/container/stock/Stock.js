import React, { Component } from 'react'
import Login from 'container/main/Login';
import ReactDataGrid from 'react-data-grid';
import CONFIG from "_variables";


const columns = [{ key: 'name', name: '종류' }, 
{ key: 'quantity', name: '재고' },
];
const rows = [
{name:'콜라',quantity:300},
{name:'사이다',quantity:200},];
const rowGetter = rowNumber => rows[rowNumber];

export default class Stock extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      quantity : 0,
      rows : []
    }
    this.nameHandler = this.nameHandler.bind(this);
    this.quantityHandler = this.quantityHandler.bind(this);

    this.getRows();
  }
  getRows(){
    fetch('/admin/stock/')
    .then(res=>res.json)
    .then(res => this.setState({rows : res}))
    }
  nameHandler(e){
    this.setState({name:e.target.value})
  }
  quantityHandler(e){
    this.setState({quantity:e.target.value})
  }
  input(){
    fetch('/admin/stock/input?kind='+this.state.name+'&quantity='+this.state.quantity)
    .then(res=>res.json)
    .then(res=>this.setState({rows:res}))
  }
  output(){
    fetch('/admin/stock/output?kind='+this.state.name+'&quantity='+this.state.quantity)
    .then(res=>res.json)
    .then(res=>this.setState({rows:res}))
  }

  render() {
    return (
      <div>
        {this.props.token ==='' ? 
        <Login tokenHandler={this.props.tokenHandler}/>
        :
        <div>
          종류
          <input name="name" value={this.state.name} 
            onChange={this.nameHandler}/>
            수량
            <input name="quantity" value={this.state.quantity} 
            onChange={this.quantityHandler}/>
            <button onClick={()=>this.input}>입고</button>
            <button onClick={()=>this.output}>출고</button>
          <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
         />
        </div>
        }

        
      </div>
    )
  }
}
