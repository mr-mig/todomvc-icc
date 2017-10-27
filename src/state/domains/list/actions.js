import { createAction } from 'redux-actions'

import {
  ADD_TO_LIST,
  ADD_NEW_TODO_TO_LIST,
  DELETE_FROM_LIST,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants'

export const addToList = createAction(ADD_TO_LIST, ({ todoId, listId }) => ({
  todoId,
  listId
}))
export const addNewTodoToList = createAction(ADD_NEW_TODO_TO_LIST)
export const deleteFromList = createAction(DELETE_FROM_LIST, ({ todoId, listId }) => ({ todoId, listId}))

export const completeAll = createAction(COMPLETE_ALL)
export const clearCompleted = createAction(CLEAR_COMPLETED)
