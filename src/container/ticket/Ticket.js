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

const columns = [{ key: 'date', name: 'DATE' }, 
  { key: 'time', name: 'TIME' },
  { key: 'movie', name: 'MOVIE' },
  { key:'seat',name:'SEAT'}];
const rows = [
  {date:'2019/10/10',time:'11:00',movie:'avengers',seat:'15'},
  {date:'2019/10/10',time:'10:00',movie:'avengers',seat:'16'},
  {date:'2019/10/10',time:'10:00',movie:'avengers',seat:'17'},
  {date:'2019/10/10',time:'11:00',movie:'avengers',seat:'15'},
  {date:'2019/10/10',time:'10:00',movie:'avengers',seat:'16'},
  {date:'2019/10/10',time:'10:00',movie:'avengers',seat:'17'},];
var rowGetter = rowNumber => rows[rowNumber];

export default class Ticket extends Component {
  constructor(props){
    super(props);
    this.state = {
      year : '', month: '', day : '',
      time : '',
      movie: '',
      movies:[],
      seat:'',
      filterdRows:[],
    }
    this.timeHandler = this.timeHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.seatHandler = this.seatHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.monthHandler = this.monthHandler.bind(this);
    this.dayHandler = this.dayHandler.bind(this);

    this.filterRows = this.filterRows.bind(this);
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
    var row =  rows.filter((index)=>{return index.time.includes(this.state.time)})
    .filter((index)=>index.movie.includes(this.state.movie))
    .filter((index)=>index.seat.includes(this.state.seat))
    .filter((index)=>index.date.includes(
      this.state.year+"/"+this.state.month+"/"+this.state.day))
    console.log(row)
    rowGetter = rowNumber => row[rowNumber];
    this.setState({filterRows:row})
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
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={800} />
        </div>
        }
        
        
      </div>
    )
  }
}