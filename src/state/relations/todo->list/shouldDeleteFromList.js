import { register } from '../../../middlewares/dependentActions'
import { DELETE_TODO } from '../../domains/todo/constants'
import { deleteFromList } from '../../domains/list/actions'
import { allLists } from '../../domains/list/selectors'

register(DELETE_TODO, shouldDeleteFromList, deleteFromList)

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
