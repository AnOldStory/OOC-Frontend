import React, { Component } from 'react'
import Login from 'container/main/Login';
import ReactDataGrid from 'react-data-grid';
import CONFIG from "_variables";

const columns = [{ key: 'date', name: 'DATE' }, 
{ key: 'time', name: 'TIME' },
{ key: 'movie', name: 'MOVIE' },
{key:'seat',name:'SEAT'}];
const rows = [
{date:'2019/10/10',time:'10:00',movie:'avengers',seat:'15'},
{date:'2019/10/10',time:'10:00',movie:'avengers',seat:'16'},
{date:'2019/10/10',time:'10:00',movie:'avengers',seat:'17'}];
const rowGetter = rowNumber => rows[rowNumber];

export default class Profit extends Component {
  render() {
    return (
      <div>
        {this.props.token ==='' ? 
        <Login tokenHandler={this.props.tokenHandler}/>
        :
        <div>
          <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={800}
         />  
        </div>
        }

        
      </div>
    )
  }
}
