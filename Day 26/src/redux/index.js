import {combineReducers} from "redux";

import usernameReducer from './username'
import emailReducer from './email'

const rootReducer = combineReducers({
  username: usernameReducer,
  email: emailReducer
})

export default rootReducer
