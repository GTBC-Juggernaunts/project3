import React from 'react';
import Griddle from 'griddle-react';
import './table.css';

const Table = props => {
  return(
    <Griddle
      data={props.data}
      useGriddleStyles={false}
      tableClassName={ 'table'}
      nextClassName="next-data"
      previousClassName="prev-data"
    />
  )
};

export default Table