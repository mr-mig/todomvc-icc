import { register } from '../../middlewares/dependentActions'
import { ADD_NEW_TODO_TO_LIST } from '../../domains/list/constants'
import { DELETE_TODO } from '../../domains/todo/constants'
import { addToList, deleteFromList } from '../../domains/list/actions'
import { getLatestId, allLists } from '../../state/queries'

register(ADD_NEW_TODO_TO_LIST, shouldAddToList, addToList)
register(DELETE_TODO, shouldDeleteFromList, deleteFromList)

function shouldAddToList(oldState, newState, payload){
  const todoId = getLatestId(newState)
  const listId = payload
  return { payload: { todoId, listId }}
}

function shouldDeleteFromList(oldState, newState, payload){
  const lists = allLists(newState)
  const todoId = payload

  return {
    payloads: lists
      .filter(list => list.tasks.indexOf(todoId) > -1)
      .map(list => ({
        listId: list.id,
        todoId
      }))
  }
}
