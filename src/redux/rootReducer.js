import { combineReducers } from 'redux'

// import reviewReducer from './Review/Reducers'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  // reviewReducer, 
  userReducer,
})

export default rootReducer