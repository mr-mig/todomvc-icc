import { applyMiddleware, compose } from 'redux'
import dependentActions from './dependentActions'
import '../state/relations/todo->list/shouldAddToList'
import '../state/relations/todo->list/shouldDeleteFromList'
import '../state/relations/list->todo/shouldCompleteTodos'
import '../state/relations/list->todo/shouldDeleteTodos'

export default compose(applyMiddleware(dependentActions))
