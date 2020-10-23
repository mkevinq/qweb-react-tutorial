import React from 'react';
import './Filter.css';

function Filter(props) {
  return (
    <div className="filter">
      <h3>Filter by {props.name.toLowerCase()}:</h3>
      <input type="text" placeholder={props.placeholder} onChange={props.callback} />
    </div>
  )
}

export default Filter;
