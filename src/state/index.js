import { combineReducers } from 'redux'
import todo from '../domains/todo/reducers'
import list from '../domains/list/reducers'
import filter from '../domains/filter/reducers'

const rootReducer = combineReducers({
  todo,
  list,
  filter
})

export default rootReducer
