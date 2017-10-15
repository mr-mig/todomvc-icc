import { createAction } from 'redux-actions'

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants'

export const addTodo = createAction(ADD_TODO)
export const deleteTodo = createAction(DELETE_TODO)
export const editTodo = createAction(EDIT_TODO, (id, text) => ({ id, text }))
export const completeTodo = createAction(COMPLETE_TODO)
export const completeAll = createAction(COMPLETE_ALL)
export const clearCompleted = createAction(CLEAR_COMPLETED)
