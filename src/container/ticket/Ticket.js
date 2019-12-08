import React, { Component } from 'react'
import ReactDataGrid from 'react-data-grid';
import Login from 'container/main/Login';
import './Ticket.scss';

import CONFIG from "_variables";

const times = ["",
              "00:00","01:00","02:00","03:00","04:00","05:00",
              "06:00","07:00","08:00","09:00","10:00","11:00",
              "12:00","13:00","14:00","15:00","16:00","17:00",
              "18:00","19:00","20:00","21:00","22:00","23:00",];
const year =  ["",2019,2020]
const month = ["",1,2,3,4,5,6,7,8,9,10,11,12]
const day = ["",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
              16,17,18,19,20,21,22,23,24,25,26,27,
              28,29,30,31];

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
      tickets :[],
      year : '', month: '', day : '',
      time : '',
      movie: '',
      movies:[],
      seat:'',
      filterdRows:[],
      tickets : [],
    }
    this.timeHandler = this.timeHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.seatHandler = this.seatHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.monthHandler = this.monthHandler.bind(this);
    this.dayHandler = this.dayHandler.bind(this);

    this.filterRows = this.filterRows.bind(this);

    this.getTickets();
  }
  yearHandler(e){
    this.setState({year:e.target.value})
  }
  monthHandler(e){
    this.setState({month:e.target.value})
  }
  dayHandler(e){
    this.setState({day:e.target.value})
  }
  timeHandler=e=>{
    this.setState({time: e.target.value});
  }
  movieHandler(e){
    this.setState({movie: e.target.value});
  }
  seatHandler(e){
    this.setState({seat: e.target.value});
  }
  filterRows(){
    var row =  this.state.tickets.filter((index)=>{
      return index.seat.includes(this.state.seat)})
    .filter((index)=>index.movie.includes(this.state.movie))

    console.log(row)
    this.rowGetter = rowNumber => row[rowNumber];
    this.setState({filterRows:row})
  }
  rowGetter = rowNumber => this.state.tickets[rowNumber];
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
            Date
            <select name="year" 
            onChange={this.yearHandler} 
            value={this.state.year}>
              {year.map((year) => <option value={year}>{year}</option> )}
            </select>
            <select name="month" 
            onChange={this.monthHandler} 
            value={this.state.month}>
              {month.map((month) => <option value={month}>{month}</option> )}
            </select>
            <select name="day" 
            onChange={this.dayHandler} 
            value={this.state.day}>
              {day.map((day) => <option value={day}>{day}</option> )}
            </select>
            Time
            <select name="time" 
            onChange={this.timeHandler} 
            value={this.state.time}>
              {times.map((time) => <option value={time}>{time}</option> )}
            </select>
            Movie
            <input name="movie" value={this.state.movie} 
            onChange={this.movieHandler}/>
            Seat
            <select name="seat"
                onChange={this.seatHandler}
                value={this.state.seat}>
                     {seats.map((seat) => <option value={seat}>{seat}</option> )}

                </select>
            <button onClick={this.filterRows}>검색</button>
            </div>
          <ReactDataGrid
        
        columns={columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.tickets.length}
        minHeight={800} />
        </div>
        }
        
        
      </div>
    )
  }
}