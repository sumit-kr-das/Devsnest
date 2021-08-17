import {SET_USERNAME} from "./constants";

const initialState = {
  data: ''
}

const index = (state = initialState, action) => {
  switch (action.type){
    case SET_USERNAME: return {
      ...state,
      data: action.payload
    }
    default: return state
  }
}

export default index;
