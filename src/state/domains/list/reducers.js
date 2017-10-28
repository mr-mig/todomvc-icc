import { handleActions } from 'redux-actions'
import {
  addToList,
  deleteFromList
} from './actions'

export const initialState = {
  byId: {
    0: { id: 0, title: 'todos', tasks:[0] },
    1: { id: 1, title: 'Ololo', tasks:[1] }
  },
  byOrder: [0, 1]
}

export default handleActions({
  [addToList]: add,
  [deleteFromList]: removeFrom
}, initialState)

function add({ byId, byOrder }, { payload }) {

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

function removeFrom({ byId, byOrder }, { payload }) {
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
