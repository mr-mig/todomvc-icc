import { applyMiddleware, compose } from 'redux'
import dependentActions from './dependentActions'
import '../state/relations/todo->list/dependentActions'
import '../state/relations/list->todo/dependentActions'

export default compose(applyMiddleware(dependentActions))
