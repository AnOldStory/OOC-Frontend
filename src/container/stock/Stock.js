import React, { Component } from 'react'
import Login from 'container/main/Login';
import ReactDataGrid from 'react-data-grid';
import { Toolbar, Data } from "react-data-grid-addons";

import CONFIG from "_variables";


const defaultColumnProperties = {
  filterable: true,
};

const handleFilterChange = filter => filters => {
  const newFilters = { ...filters };
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  return newFilters;
};

const columns = [{ key: 'id', name: '상품번호' },
{ key:'cineGoodsId', name: '지점'},
{ key:'cinemaId',name:'지점ID'},
{ key: 'goodsName', name: '상품명' },
{ key: 'goodsPrice', name : '단가'},
{ key: 'goodsCount', name: '재고'},
].map(c => ({ ...c, ...defaultColumnProperties }));

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
      goods:[],      
      filter : [],  
      
      filterName:'',
      filterGoodsNum:'',
      filterCinema:'',
    }
    this.nameHandler = this.nameHandler.bind(this);
    this.countHandler = this.countHandler.bind(this);
    this.cinemaHandler = this.cinemaHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
    this.idHandler = this.idHandler.bind(this);
    this.filterCinemaHandler = this.filterCinemaHandler.bind(this);
    this.filterGoodsNumHandler = this.filterGoodsNumHandler.bind(this);
    this.filterNameHandler = this.filterNameHandler.bind(this);
    this.rowGetter = this.rowGetter.bind(this);


    this.addItem = this.addItem.bind(this);
    this.inItem = this.inItem.bind(this);
    this.outItem= this.outItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.filterStocks = this.filterStocks.bind(this);
    this.getStocks();
  }
  getStocks(){
    if(this.props.token != ""){
    fetch(CONFIG.HOMEPAGE + "/admin/stock?token="+this.props.token)
    .then(res=>
      res.json()
    )
    .then(res=>{
      if(res !={}){
        res = Array.from(res).map(x=>{
          let k = x;
          k.cineGoodsId= x.cineGoodsId.cinemaName;
          return k;
        })
      }
      console.log(res)
      this.setState({goods:res})
  })
  }

  }
  
  filterNameHandler(e){
    this.setState({filterName:e.target.value})
  }
  filterGoodsNumHandler(e){
    this.setState({filterGoodsNum:e.target.value})
  }
  filterCinemaHandler(e){
    this.setState({filterCinema:e.target.value})
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
  filterRowGetter = rowNumber => this.state.filter[rowNumber];

  filterStocks(){
    var rows = this.state.goods.filter((data)=>data.goodsName.includes(this.state.filterName))
    .filter((data)=>data.id.toString().includes(this.state.filterGoodsNum.toString()))
    .filter((data)=>data.cineGoodsId.toString().includes(this.state.filterCinema.toString()));
    

    this.setState({filter:rows});
  }

  render() {
    return (
      <div>
        {this.props.token ==='' ? 
        <Login tokenHandler={this.props.tokenHandler}/>
        :
        <div>
          <div>
           이름
          <input name="name" value={this.state.name} 
            onChange={this.nameHandler}/>
         
            수량
            <input name="count" value={this.state.count} 
            onChange={this.countHandler}/>
           
            지점
            <input name="price" value={this.state.cinema} 
            onChange={this.cinemaHandler}/>
            <button onClick={this.inItem}>입고</button>
            <button onClick={this.outItem}>출고</button>
             단가
            <input name="price" value={this.state.price} 
            onChange={this.priceHandler}
            placeholder="새로운상품에만 입력"/>
            <button onClick={this.addItem}>신제품</button>
            상품번호
            <input name="id" value={this.state.id} 
              onChange={this.idHandler}
              placeholder="제거할때만 입력"/>
            <button onClick={this.removeItem}>제거</button>
            </div>
            <br/>
            <div>
              <strong>상품검색</strong> 상품명
              <input name="name" value={this.state.filterName}
              onChange={this.filterNameHandler}/>
              상품번호
              <input name="num" value={this.state.filterGoodsNum}
              onChange={this.filterGoodsNumHandler}/>
              지점
              <input name="cinema" value={this.state.filterCinema}
              onChange={this.filterCinemaHandler}/>
              <button onClick={this.filterStocks}>검색</button>
            </div>
          <ReactDataGrid
          columns={columns}
          rowGetter={this.state.filter.length===0? this.rowGetter
          :this.filterRowGetter}
          rowsCount={this.state.filter.length ===0?this.state.goods.length
          :this.state.filter.length}
          minHeight={800}
         />} />
        </div>
        }

        
      </div>
    )
  }
}
