import {SET_EMAIL} from "./constants";

const initialState = {
  data: ''
}

const index = (state = initialState, action) => {
  switch (action.type){
    case SET_EMAIL: return {
      ...state,
      data: action.payload
    }
    default: return state
  }
}

export default index;
