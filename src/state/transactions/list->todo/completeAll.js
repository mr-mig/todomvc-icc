import { createAction } from 'redux-actions'
import { mapActions } from '../../../middlewares/dependentActions'

import { completeTodo } from '../../domains/todo/actions'

import {
  allTodoItems,
  todoIndex
} from '../../domains/todo/selectors'

import { listIndex } from '../../domains/list/selectors'

export const completeAll = createAction('list->todo://COMPLETE_ALL')

mapActions({
  [completeAll](payload, dispatch, store){
    const newState = store.getState()
    const listId = payload
    const todosById = todoIndex(newState).byId
    const allTodos = allTodoItems(newState)
    const list = listIndex(newState).byId[listId]
    const todoIds = list.tasks
    const areAllMarked = todoIds.every(id => todosById[id].completed)

    return allTodos
      .filter(todo => todoIds.indexOf(todo.id) > -1)
      .filter(todo => todo.completed === areAllMarked)
      .map(todo => todo.id)
      .map(id => dispatch(completeTodo(id)))
  }
})
