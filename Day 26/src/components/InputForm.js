"use strict"
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import setUsername from "../redux/username/actions";
import setEmail from "../redux/email/actions";

function InputForm() {
  const username = useSelector(state => state.username.data)
  const email = useSelector(state => state.email.data)
  const dispatch = useDispatch()
  const onChangeUsername = (e) => {
    dispatch(setUsername(e.target.value))
  }
  const onChangeEmail = (e) => {
    dispatch(setEmail(e.target.value))
  }
  return (
    <div className={"form"}>
      <input type = "text" pattern="([A-Z]{1}[a-z]{1,}[ ]{1}){1,}([A-Z]{1}[a-z]{1,})" value = {username} onChange={onChangeUsername}/> <br/>
      <input type = "email" pattern="[a-z.]{2,}@[a-z.]{2,}[.]{1}[a-z]{2,}" value = {email} onChange={onChangeEmail}/>
    </div>
  );
}

export default InputForm;