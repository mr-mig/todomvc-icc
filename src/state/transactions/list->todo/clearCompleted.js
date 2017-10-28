import { mapActions } from '../../../middlewares/dependentActions'
import { createAction } from 'redux-actions'

import { deleteTodo } from '../../domains/todo/actions'
import { allTodoItems } from '../../domains/todo/selectors'
import { listIndex } from '../../domains/list/selectors'

export const clearCompleted = createAction('list->todo://CLEAR_COMPLETED')

mapActions({
  [clearCompleted](payload, dispatch, store) {
    const newState = store.getState()
    const listId = payload
    const list = listIndex(newState).byId[listId]
    const allTodos = allTodoItems(newState)
    const todoIds = list.tasks

    return allTodos
      .filter(todo => todoIds.indexOf(todo.id) > -1)
      .filter(todo => todo.completed)
      .map(todo => todo.id)
      .map(id => dispatch(deleteTodo(id)))
  }
})
