import { register } from '../../../middlewares/dependentActions'
import { ADD_NEW_TODO_TO_LIST } from '../../domains/list/constants'
import { addToList } from '../../domains/list/actions'
import { getLatestId } from '../../domains/todo/selectors'

register(ADD_NEW_TODO_TO_LIST, shouldAddToList, addToList)

function shouldAddToList(oldState, newState, payload){
  const todoId = getLatestId(newState)
  const listId = payload
  return { payload: { todoId, listId }}
}
