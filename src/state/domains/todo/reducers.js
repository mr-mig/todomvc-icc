import { handleActions } from 'redux-actions'

import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo
} from './actions'

// indexed domain gives some perf benefits.
const initialState = {
  byId: {
    0: { text: 'Use ICCs!', completed: false, id: 0 },
    1: { text: 'Use ICCs!', completed: false, id: 1 }
  },
  byOrder: [0, 1] // in case order makes sense (e.g. you need to move/sort todos). This array will have IDs, not the objects
}

export default handleActions({
  [addTodo]: add,
  [deleteTodo]: remove,
  [editTodo]: edit,
  [completeTodo]: complete
}, initialState)

function nextId(byOrder) {
  return byOrder.reduce((maxId, id) => Math.max(id, maxId), -1) + 1
}

function add({ byId, byOrder }, { payload }) {

  const todo = {
    id: nextId(byOrder),
    text: payload,
    completed: false
  }

  return {
    byId: {
      ...byId,
      [todo.id]: todo
    },
    byOrder: [
      ...byOrder,
      todo.id
    ]
  }
}

function remove({ byId, byOrder }, { payload }) {
  delete byId[payload]

  return {
    byId: { ...byId },
    byOrder: byOrder.filter(id => id !== payload)
  }
}

function edit({ byId, byOrder}, { payload }) {
  const todo = byId[payload.id]
  todo.text = payload.text

  return {
    byId: {
      ...byId,
      [payload.id]: { ...todo }
    },
    byOrder
  }
}

function complete({ byId, byOrder }, { payload }) {
  const todo = byId[payload]
  todo.completed = !todo.completed

  return {
    byId: {
      ...byId,
      [payload]: { ...todo }
    },
    byOrder
  }
}

