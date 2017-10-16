import { applyMiddleware, compose } from 'redux'
import dependentActions from './dependentActions'
import '../relations/todo->list/dependentActions'
import '../relations/list->todo/dependentActions'

export default compose(applyMiddleware(dependentActions))
