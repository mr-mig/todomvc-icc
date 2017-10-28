import { createAction } from 'redux-actions'

export const addToList = createAction(
  'list://ADD_TO_LIST',
  ({ todoId, listId }) => ({
    todoId,
    listId
  }))

export const deleteFromList = createAction(
  'list://DELETE_FROM_LIST',
  ({ todoId, listId }) => ({
    todoId,
    listId
  })
)
