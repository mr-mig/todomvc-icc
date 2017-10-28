import { combineReducers } from 'redux'
import todo from '../state/domains/todo/reducers'
import list from '../state/domains/list/reducers'
import filter from '../state/domains/filter/reducers'
import '../state/transactions'

const rootReducer = combineReducers({
  todo,
  list,
  filter
})

export default rootReducer
