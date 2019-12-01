import React, { Component } from 'react'

import ReactDataGrid from 'react-data-grid';

const columns = [{ key: 'date', name: 'DATE' }, 
{ key: 'time', name: 'TIME' },
{ key: 'name', name: 'NAME' },
{key:'seat',name:'SEAT'}];
const rows = [
{date:'2019/10/10',time:'10:00',name:'hyunbo',seat:'15'},
{date:'2019/10/10',time:'10:00',name:'avengers',seat:'16'},
{date:'2019/10/10',time:'10:00',name:'avengers',seat:'17'}];
const rowGetter = rowNumber => rows[rowNumber];

export default class People extends Component {
  render() {
    return (
      <div>
        {!this.props.isLogined && <div>Access denied</div>}
        {this.props.isLogined && 
        <div>
           <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={800} />    
        </div>}
      </div>
    )
  }
}
