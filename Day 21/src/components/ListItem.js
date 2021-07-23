"use strict"
import React, {useState} from 'react';

function ListItem({entry, entryList, updateList, removeEntry}) {
  const [editing, setEditing] = useState(false)
  const [state, setState] = useState(entry)

  const toggleEditing = ()=>{
    setEditing(!editing)
  }

  const saveEditing = ()=>{
    if (!state.text || !state.number)
      return
    toggleEditing()
    entryList.map(item => {
      if (item === entry){
        item.text = state.text
        item.number = state.number
      }
    })
    updateList(entryList)
    localStorage.setItem("todo_list", JSON.stringify(entryList))
  }

  const deleteEntry = ()=>{
    removeEntry(entry)
  }

  const updateText = (event)=>{
    setState((prevState) => {
      return {
        text: event.target.value,
        number: prevState.number
      }
    })
  }

  const updateNumber = (event)=>{
    setState((prevState) => {
      return {
        text: prevState.text,
        number: event.target.value
      }
    })
  }

  return (
    editing?(
      <div className="item">
        <input value={state.text} type="text" onChange={updateText}/>
        <br/>
        <input value={state.number} type="number" onChange={updateNumber}/>
        <div>
          <button onClick={saveEditing}>Save</button>
          <button onClick={deleteEntry}>Delete</button>
        </div>
      </div>
    ):(
      <div className="item">
        <div>{entry.text}</div>
        <div>You consumed {entry.number} calories</div>
        <div>
          <button onClick={toggleEditing}>Edit</button>
          <button onClick={deleteEntry}>Delete</button>
        </div>
      </div>
    )
  );
}

export default ListItem;
