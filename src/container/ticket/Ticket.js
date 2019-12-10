import React, { Component } from 'react'
import ReactDataGrid from 'react-data-grid';
import Login from 'container/main/Login';
import './Ticket.scss';

import CONFIG from "_variables";

const seats = ["",1,2,3,4,5,6,7,8,9,10,11,12,13,
              14,15,16,17,18,19,20,21,22,23,24,25,26,
              27,28,29,30,31,32,33,34,35,36,37,38,39,
              40,41,42,43,44,45,46,47,48,49,50,51,52]

const columns = [{ key: 'id', name: '고유번호' }, 
  { key: 'customerId', name: '고객번호' },
  { key: 'screeningId', name: '상영관' },
  {key:'ticketPrice',name:'결제금액'},
  { key:'ticketPaymentType',name:'결제타입'},
{key:'seatNumber',name:'좌석'}];

var rows = [
  {date:'2019/10/10',time:'11:00',movie:'avengers',seat:'15'},
  ];


export default class Ticket extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter : [],
      uniqueId:'',
      customId:'',
      cinema:'',
      paytype:'',
      seat:'',
      filterdRows:[],
      tickets : [],
    }
    this.seatHandler = this.seatHandler.bind(this);
    this.uniqueIdHandler = this.uniqueIdHandler.bind(this);
    this.customIdHandler = this.customIdHandler.bind(this);
    this.cinemaHandler = this.cinemaHandler.bind(this);
    this.payTypeHandler = this.payTypeHandler.bind(this);
    

    this.filterRows = this.filterRows.bind(this);

    this.getTickets();
  }
  
  uniqueIdHandler(e){
    this.setState({uniqueId: e.target.value});
  }
  customIdHandler(e){
    this.setState({customId: e.target.value});
  }
  cinemaHandler(e){
    this.setState({cinema: e.target.value});
  }
  payTypeHandler(e){
    this.setState({paytype: e.target.value});
  }
  seatHandler(e){
    this.setState({seat: e.target.value});
  }
  filterRows(){
    var row =  this.state.tickets.filter((index)=>index.seatNumber.toString().includes(this.state.seat.toString()))
    .filter((index)=>index.id.toString().includes(this.state.uniqueId.toString()))
    .filter((index)=>index.customerId.toString().includes(this.state.customId.toString()))
    .filter((index)=>index.screeningId.toString().includes(this.state.cinema))
    .filter((index)=>index.ticketPaymentType.toString().includes(this.state.paytype))

    this.setState({filterdRows:row})
  }
  rowGetter = rowNumber => this.state.tickets[rowNumber];
  filterRowGetter = rowNumber => this.state.filterdRows[rowNumber];

  getTickets=()=>{
    fetch(CONFIG.HOMEPAGE + "/admin/ticket?token="+this.props.token)
    .then(res=>res.json())
    .then(res=>this.setState({tickets:res}));
  }
  render() {
    return (
      <div>
        {this.props.token ==='' ?
        <Login tokenHandler={this.props.tokenHandler}/>
        :
        <div>
          <div className="filter">
            고유번호
            <input name="uniqueId" value={this.state.uniqueId} 
            onChange={this.uniqueIdHandler}/>
            고객ID
            <input name="customId" value={this.state.customId}
            onChange={this.customIdHandler}/>
            상영관
            <input name="cinema" value={this.state.cinema}
            onChange={this.cinemaHandler}/>
            결제방식
            <select name="payType" value={this.state.paytype}
            onChange={this.payTypeHandler}>
              <option value="">전체</option>
              <option value="bank">bank</option>
              <option value="card">card</option>
            </select>

            좌석
            <select name="seat"
                onChange={this.seatHandler}
                value={this.state.seat}>
                     {seats.map((seat) => <option value={seat}>{seat}</option> )}

                </select>
            <button onClick={this.filterRows}>검색</button>
            </div>
          <ReactDataGrid
        
        columns={columns}
        rowGetter={this.state.filterdRows.length===0? this.rowGetter
        :this.filterRowGetter}
        rowsCount={this.state.filterdRows.length ===0?this.state.tickets.length
        :this.state.filterdRows.length}
        minHeight={800} />
        </div>
        }
        
        
      </div>
    )
  }
}