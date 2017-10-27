import { register } from '../../../middlewares/dependentActions'

import { CLEAR_COMPLETED } from '../../domains/list/constants'
import { deleteTodo } from '../../domains/todo/actions'
import { allTodoItems } from '../../domains/todo/selectors'
import { listIndex } from '../../domains/list/selectors'

register(CLEAR_COMPLETED, shouldDeleteTodos, deleteTodo)

function shouldDeleteTodos(oldState, newState, payload) {
  const listId = payload
  const list = listIndex(newState).byId[listId]
  const allTodos = allTodoItems(newState)
  const todoIds = list.tasks

  const completedTodoIds = allTodos
    .filter(todo => todoIds.indexOf(todo.id) > -1)
    .filter(todo => todo.completed)
    .map(todo => todo.id)

  return {
    payloads: completedTodoIds
  }
}
