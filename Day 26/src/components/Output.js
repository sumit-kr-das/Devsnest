"use strict"
import React from 'react';
import {useSelector} from "react-redux";

function Output() {
  const username = useSelector(state => state.username.data)
  const email = useSelector(state => state.email.data)
  return (
    <div className={"output"}>
      Username: {username} <br/>
      Email: {email}
    </div>
  );
}

export default Output;