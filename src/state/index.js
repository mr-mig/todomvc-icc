import { combineReducers } from 'redux'
import todos from '../domains/todo/reducers'

const rootReducer = combineReducers({
  todos
})

export default rootReducer
