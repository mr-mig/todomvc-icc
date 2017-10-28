import { createAction } from 'redux-actions'
import { mapActions } from '../../../middlewares/dependentActions'
import { addToList } from '../../domains/list/actions'
import { addTodo } from '../../domains/todo/actions'
import { getLatestId } from '../../domains/todo/selectors'

export const addNewTodoToList = createAction('todo->list://ADD_NEW_TODO_TO_LIST')

mapActions({
  [addNewTodoToList] ({ text, listId }, dispatch, store) {
    if (text.length !== 0) {

      dispatch(addTodo(text))

      const todoId = getLatestId(store.getState())

      dispatch(addToList({ todoId, listId }))
    }
  }
})
