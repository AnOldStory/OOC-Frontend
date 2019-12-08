import React, { Component } from 'react'
import Login from 'container/main/Login';
import ReactDataGrid from 'react-data-grid';
import CONFIG from "_variables";


const columns = [{ key: 'id', name: '상품번호' },
{ key:'cinemaId', name: '지점'},
{ key: 'goodsName', name: '상품명' },
{ key: 'goodsPrice', name : '단가'},
{ key: 'goodsCount', name: '재고'},

];

export default class Stock extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name : '',
      count:0,
      cinema:'',
      price:0,
      rows : [],
      goods:[]
    }
    this.nameHandler = this.nameHandler.bind(this);
    this.countHandler = this.countHandler.bind(this)
    this.cinemaHandler = this.cinemaHandler.bind(this)
    this.priceHandler = this.priceHandler.bind(this)
    this.idHandler = this.idHandler.bind(this)
    this.rowGetter = this.rowGetter.bind(this);

    this.addItem = this.addItem.bind(this);
    this.inItem = this.inItem.bind(this);
    this.outItem= this.outItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.getStocks();
  }
  getStocks(){
    fetch(CONFIG.HOMEPAGE + "/admin/stock?token="+this.props.token)
    .then(res=>res.json())
    .then(res=>this.setState({goods:res}))
    }


  nameHandler(e){
    this.setState({name:e.target.value})
  }
  countHandler(e){
    this.setState({count:e.target.value})
  }
  cinemaHandler(e){
    this.setState({cinema:e.target.value})
  }
  priceHandler(e){
    this.setState({price:e.target.value})
  }
  idHandler(e){
    this.setState({id:e.target.value})
  }
  addItem(){
    fetch(CONFIG.HOMEPAGE+"/admin/stock?token="+this.props.token
          +"&name="+this.state.name
          +"&count="+this.state.count
          +"&cinema="+this.state.cinema
          +"&price="+this.state.price)
    this.getStocks();
  }
  inItem(){
    fetch(CONFIG.HOMEPAGE+"/admin/stock?token="+this.props.token
          +"&name="+this.state.name
          +"&count="+this.state.count
          +"&cinema="+this.state.cinema)
    this.getStocks();
  }
  outItem(){
    fetch(CONFIG.HOMEPAGE+"/admin/stock?token="+this.props.token
          +"&name="+this.state.name
          +"&count="+((-1)*this.state.count)
          +"&cinema="+this.state.cinema)
    this.getStocks();
  }
  removeItem(){
    fetch(CONFIG.HOMEPAGE+"/admin/stock?token="+this.props.token
          +"&goods="+[this.state.id].concat("dummy"))
    this.getStocks();
  }
  rowGetter = rowNumber => this.state.goods[rowNumber];
  render() {
    return (
      <div>
        {this.props.token ==='' ? 
        <Login tokenHandler={this.props.tokenHandler}/>
        :
        <div>
          
         
            수량
            <input name="count" value={this.state.count} 
            onChange={this.countHandler}/>
            단가
            <input name="price" value={this.state.price} 
            onChange={this.priceHandler}
            placeholder="새로운상품에만 입력"/>
            지점
            <input name="price" value={this.state.cinema} 
            onChange={this.cinemaHandler}/>
            <button onClick={this.inItem}>입고</button>
            <button onClick={this.outItem}>출고</button>
             이름
          <input name="name" value={this.state.name} 
            onChange={this.nameHandler}/>
            <button onClick={this.addItem}>신제품</button>
            상품번호
            <input name="id" value={this.state.id} 
              onChange={this.idHandler}
              placeholder="제거할때만 입력"/>
            <button onClick={this.removeItem}>제거</button>
          <ReactDataGrid
        columns={columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.goods.length}
        minHeight={800} />
        </div>
        }

        
      </div>
    )
  }
}
