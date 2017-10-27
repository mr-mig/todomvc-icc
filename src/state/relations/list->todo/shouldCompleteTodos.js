import { register } from '../../../middlewares/dependentActions'

import { COMPLETE_ALL } from '../../domains/list/constants'
import { completeTodo } from '../../domains/todo/actions'

import {
  allTodoItems,
  todoIndex
} from '../../domains/todo/selectors'

import { listIndex } from '../../domains/list/selectors'

register(COMPLETE_ALL, shouldCompleteTodo, completeTodo)

function shouldCompleteTodo(oldState, newState, payload) {
  const listId = payload
  const todosById = todoIndex(newState).byId
  const allTodos = allTodoItems(newState)
  const list = listIndex(newState).byId[listId]
  const todoIds = list.tasks


  const areAllMarked = todoIds.every(id => todosById[id].completed)
  return {
    payloads: allTodos
      .filter(todo => todoIds.indexOf(todo.id) > -1)
      .filter(todo => todo.completed === areAllMarked)
      .map(todo => todo.id)
  }
}
