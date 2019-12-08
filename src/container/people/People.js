import React, { Component } from 'react'
import Login from 'container/main/Login';
import ReactDataGrid from 'react-data-grid';
import CONFIG from "_variables";

const columns = [{ key: 'name', name: '이름' }, 
{ key: 'salary', name: '급여' },
{ key: 'position', name: '직책' },
{key:'cinema',name:'근무지'}];
const rows = [
  {name:'sejin',salary:10000000000,position:'manager',cinema:"중앙"},
  {name:'junyoung',salary:100,position:'hoijang',cinema:"고잔"}
];
const rowGetter = rowNumber => rows[rowNumber];

export default class People extends Component {
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
        minHeight={800} />    
        </div>}

        
      </div>
    )
  }
}
