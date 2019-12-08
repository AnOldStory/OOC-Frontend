import React, { Component } from 'react'
import Login from 'container/main/Login';
import ReactDataGrid from 'react-data-grid';
import CONFIG from "_variables";

const columns = [{ key: 'empName', name: '이름' }, 
{ key: 'empSalary', name: '급여' },
{ key: 'empPosition', name: '직책' },
{key:'cinemaId',name:'근무지'}];
var rows = [
  {name:'sejin',salary:10000000000,position:'manager',cinema:"중앙"},
  {name:'junyoung',salary:100,position:'hoijang',cinema:"고잔"}
];

export default class People extends Component {
  constructor(props){
    super(props);
    this.state={
      people : [],
      filter : [],
      name : '',
      salary: '',
      position:'',
      cinema: '',
    }
    this.rowGetter = this.rowGetter.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.positionHandler = this.positionHandler.bind(this);
    this.cinemaHandler = this.cinemaHandler.bind(this);
    this.filterPeople = this.filterPeople.bind(this);
    this.getPeople();
  }
  rowGetter = rowNumber => this.state.people[rowNumber];
  filterRowGetter = rowNumber => this.state.filter[rowNumber];

  nameHandler(e){
    this.setState({name:e.target.value})
  }
  positionHandler(e){
    this.setState({position:e.target.value})
  }
  cinemaHandler(e){
    this.setState({cinema:e.target.value})
  }
  getPeople(){
    if(this.props.token != ""){
    fetch(CONFIG.HOMEPAGE + "/admin/personel?token="+this.props.token)
    .then(res=>res.json())
    .then(res=>(this.setState({people:res})));
    }
  }
  filterPeople(){
    var rows = this.state.people.filter((data)=>data.empName.includes(this.state.name))
    // .filter((data)=>data.empPosition.includes(this.state.position))
    // .filter((data)=>data.cinemaId===this.state.cinema)

    this.setState({filter:rows});
  }
  render() {
    return (
      <div>
        {this.props.token ==='' ?
        <Login tokenHandler={this.props.tokenHandler}/>
        :
        <div>
          <div className="filter">
            이름: <input name="name" value={this.state.name} 
            onChange={this.nameHandler}/>
            직책: <input name="salary" value={this.state.position} 
            onChange={this.positionHandler}/>
            근무지: <input name="cinema" value={this.state.cinema} 
            onChange={this.cinemaHandler}/>
            <button onClick={this.filterPeople}>검색</button>
          </div>
           <ReactDataGrid
        columns={columns}
        rowGetter={this.state.filter.length===0? this.rowGetter
        :this.filterRowGetter}
        rowsCount={this.state.filter.length ===0?this.state.people.length
        :this.state.filter.length}
        minHeight={800} />    
        </div>}
      </div>
    )
  }
}
