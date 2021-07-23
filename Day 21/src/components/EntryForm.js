"use strict"
import React ,{useState} from 'react';

function EntryForm({addNewEntry}) {
  const [state, updateState] = useState({
    text: "",
    number: ""
  })

  const addEntry = (event) => {
    event.preventDefault()
    if (!state.text || !state.number)
      return
    addNewEntry(state)
    updateState({
      text: "",
      number: ""
    })
  }

  const updateText = (event)=>{
    updateState((prevState) => {
      return {
        text: event.target.value,
        number: prevState.number
      }
    })
  }

  const updateNumber = (event)=>{
    updateState((prevState) => {
      return {
        text: prevState.text,
        number: event.target.value
      }
    })
  }

  return (
    <form onSubmit={addEntry}>
      <input placeholder="Food name" type="text" onChange={updateText} value={state.text}/>
      <input placeholder="calories consumed" type="number" onChange={updateNumber} value={state.number}/><br/>
      <input type="submit" value="Add"/>
    </form>
  );
}

export default EntryForm;
