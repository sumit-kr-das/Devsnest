"use strict"
import './styles/ToDoList.scss'

import React, {useState} from 'react';

import EntryForm from "./EntryForm";
import EditableList from "./EditableList";

function ToDoList(props) {
  const [entryList, updateList] = useState(
    JSON.parse(localStorage.getItem("todo_list") || "[]")
  )

  const addEntry = (entry) => {
    let entryList_ = [...entryList,{...entry, time: Date.now()}]
    localStorage.setItem("todo_list", JSON.stringify(entryList_))
    updateList(entryList_)
  }

  const removeEntry = (entry) => {
    let entryList_ = entryList.filter(item => item !== entry)
    localStorage.setItem("todo_list", JSON.stringify(entryList_))
    updateList(entryList_)
  }

  return (
    <div className="todo-list">
      <EntryForm addNewEntry={addEntry}/>
      <EditableList removeEntry={removeEntry} entryList={entryList} updateList={updateList}/>
    </div>
  );
}

export default ToDoList;
