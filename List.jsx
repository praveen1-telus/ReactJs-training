import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function List(props) {
    
  return (
    <div className='todo_style'>
        <button onClick={()=>{props.onSelect(props.id)}}> <DeleteIcon/> </button>
      <ul>{props.text}</ul>
    </div>
  );
}
