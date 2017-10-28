import { mapActions } from '../../../middlewares/dependentActions'
import { deleteTodo, editTodo } from '../../domains/todo/actions'
import { deleteFromList } from '../../domains/list/actions'
import { allLists } from '../../domains/list/selectors'
import { createAction } from 'redux-actions'

export const editOrTotallyDeleteTodo = createAction(
  'todo->list://EDIT_OR_TOTALLY_DELETE_TODO',
  (id, text) => ({ id, text })
)

mapActions({
  [editOrTotallyDeleteTodo] ({ id, text }, dispatch, store){
    const newState = store.getState()
    const lists = allLists(newState)

    if (text.length === 0){
      dispatch(deleteTodo(id))

      return lists
        .filter(list => list.tasks.indexOf(id) > -1)
        .map(list => dispatch(deleteFromList({
          listId: list.id,
          todoId: id
        })))

    } else {
      return dispatch(editTodo(id, text))
    }
  }
})


