import { combineReducers } from 'redux'
import todo from '../domains/todo/reducers'
import filter from '../domains/filter/reducers'

const rootReducer = combineReducers({
  todo,
  filter
})

export default rootReducer
