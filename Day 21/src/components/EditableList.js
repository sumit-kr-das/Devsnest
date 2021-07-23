"use strict"
import React from 'react';
import ListItem from "./ListItem";

function EditableList({entryList, removeEntry, updateList}) {
  return (
    <div className="listDiv">
      {
        entryList.map(entry => (
          <ListItem key={entry.time} entry={entry} entryList={entryList} updateList={updateList} removeEntry={removeEntry}/>
        ))
      }
    </div>
  );
}

export default EditableList;
