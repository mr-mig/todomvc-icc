import { handleActions } from 'redux-actions'

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants'

// indexed domain gives some perf benefits.
const initialState = {
  byId: {
    0: { text: 'Use ICCs!', completed: false, id: 0 }
  },
  byOrder: [0] // in case order makes sense (e.g. you need to move/sort todos). This array will have IDs, not the objects
}

export default handleActions({
  [ADD_TODO]: addTodo,
  [DELETE_TODO]: deleteTodo,
  [EDIT_TODO]: editTodo,
  [COMPLETE_TODO]: completeTodo,
  [COMPLETE_ALL]: completeAll,
  [CLEAR_COMPLETED]: clearCompleted
}, initialState)

function nextId(byOrder) {
  return byOrder.reduce((maxId, id) => Math.max(id, maxId), -1) + 1
}

function addTodo({ byId, byOrder }, { payload }) {

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

function deleteTodo({ byId, byOrder }, { payload }) {
  delete byId[payload]

  return {
    byId: { ...byId },
    byOrder: byOrder.filter(id => id !== payload)
  }
}

function editTodo({ byId, byOrder}, { payload }) {
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

function completeTodo({ byId, byOrder }, { payload }) {
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

function completeAll({ byId, byOrder }) {
  const areAllMarked = byOrder.every(id => byId[id].completed)

  return {
    byId: byOrder.reduce(
      (acc, id) => {
        byId[id].completed = !areAllMarked
        acc[id] = { ...byId[id] }
        return acc
      },
      {}),
    byOrder
  }
}

function clearCompleted({ byId, byOrder }) {
  const left = byOrder.filter(id => byId[id].completed === false)

  return {
    byId: left.reduce(
      (acc, id) => {
        acc[id] = { ...byId[id] }
        return acc
      },
      {}),
    byOrder: left
  }
}


