import {SET_USERNAME} from "./constants";

const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username
  }
}

export default setUsername;
