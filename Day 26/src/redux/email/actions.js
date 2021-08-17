import {SET_EMAIL} from "./constants";

const setEmail = (username) => {
  return {
    type: SET_EMAIL,
    payload: username
  }
}

export default setEmail;
