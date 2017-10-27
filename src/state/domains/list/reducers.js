import { handleActions } from 'redux-actions'

import {
  ADD_TO_LIST,
  DELETE_FROM_LIST
} from './constants'

const initialState = {
  byId: {
    0: { id: 0, title: 'todos', tasks:[0] },
    1: { id: 1, title: 'Ololo', tasks:[1] }
  },
  byOrder: [0, 1]
}

export default handleActions({
  [ADD_TO_LIST]: addToList,
  [DELETE_FROM_LIST]: deleteFromList
}, initialState)

function addToList({ byId, byOrder }, { payload }) {

  const list = byId[payload.listId]
  const newTasks = [...list.tasks, payload.todoId]

  return {
    byId: {
      ...byId,
      [payload.listId]: {
        ...list,
        tasks: newTasks,
      }
    },
    byOrder
  }
}

function deleteFromList({ byId, byOrder }, { payload }) {
  const list = byId[payload.listId]
  const newTasks = list.tasks.filter(id => id !== payload.todoId)

  return {
    byId: {
      ...byId,
      [payload.listId]: {
        ...list,
        tasks: newTasks
      }
    },
    byOrder
  }
}
