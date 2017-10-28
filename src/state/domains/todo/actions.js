import { createAction } from 'redux-actions'

export const addTodo = createAction('todo://ADD_TODO')
export const deleteTodo = createAction('todo://DELETE_TODO')
export const completeTodo = createAction('todo://COMPLETE_TODO')

export const editTodo = createAction(
  'todo://EDIT_TODO',
  (id, text) => ({
    id,
    text
  }))
