import React, {useEffect, useState} from 'react'
import DndContext from './DndContext'
import uuid from 'uuid/v4'

import onDragEnd from '../helpers/onDragEnd'
import addCardList from '../helpers/addCardList'

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const columnsFromBackend = {
  'list': {
    name: "Content List",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};


function Main(props) {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="main">
        
      <div className='dnd-context' style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
      }}>
        <DndContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
          columns={columns}
          setColumns={setColumns}
        />
      </div>

      <a className='add-list' onClick={(()=>{
        addCardList(columns, setColumns)
        })}> 
        
        <button>
          Add Column
        </button>
      </a>
    </div>
    )
}

export default Main;