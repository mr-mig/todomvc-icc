import { register } from '../../middlewares/dependentActions'

import {
  CLEAR_COMPLETED,
  COMPLETE_ALL
} from '../../domains/list/constants'

import { deleteFromList } from '../../domains/list/actions'

import {
  deleteTodo,
  completeTodo
} from '../../domains/todo/actions'

import {
  listIndex,
  todoIndex,
  allTodoItems
} from '../../state/queries'

register(CLEAR_COMPLETED, shouldDeleteTodos, deleteTodo)
register(COMPLETE_ALL, shouldCompleteTodo, completeTodo)

function shouldDeleteTodos(oldState, newState, payload){
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

