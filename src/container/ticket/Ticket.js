import React, { Component } from 'react'
import ReactDataGrid from 'react-data-grid';
import './Ticket.scss';

const columns = [{ key: 'date', name: 'DATE' }, 
  { key: 'time', name: 'TIME' },
  { key: 'movie', name: 'MOVIE' },
  { key:'seat',name:'SEAT'}];
const rows = [
  {date:'2019/10/10',time:'11:00',movie:'avengers',seat:'15'},
  {date:'2019/10/10',time:'10:00',movie:'avengers',seat:'16'},
  {date:'2019/10/10',time:'10:00',movie:'avengers',seat:'17'}];
var rowGetter = rowNumber => rows[rowNumber];

export default class Ticket extends Component {
  constructor(props){
    super(props);
    this.state = {
      date : '',
      time : '',
      movie: '',
      seat:'',
      filterdRows:[],
    }
    this.dateHandler = this.dateHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.seatHandler = this.seatHandler.bind(this);

    this.filterRows = this.filterRows.bind(this);
    console.log(rows)
  }
  dateHandler(e){
    this.setState({date: e.target.value});
  }
  timeHandler(e){
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
    .filter((index)=>index.date.includes(this.state.date))
    console.log(row)
    rowGetter = rowNumber => row[rowNumber];
    this.setState({filterRows:row})
  }
  render() {
    return (
      <div>
        {!this.props.isLogined && <div>Access denied</div>}
        {this.props.isLogined && 
        <div>
          <div>
            Date
            <input name="date" value={this.state.date} 
            onChange={this.dateHandler}/>
            Time
            <input name="time" value={this.state.time} 
            onChange={this.timeHandler}/>
            Movie
            <input name="movie" value={this.state.movie} 
            onChange={this.movieHandler}/>
            Seat
            <input name="seat" value={this.state.seat} 
            onChange={this.seatHandler}/>
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