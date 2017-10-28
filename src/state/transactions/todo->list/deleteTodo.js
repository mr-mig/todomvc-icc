import { deleteTodo } from '../../domains/todo/actions'
import { mapActions } from '../../../middlewares/dependentActions'
import { allLists } from '../../domains/list/selectors'
import { deleteFromList } from '../../domains/list/actions'

mapActions({
  [deleteTodo](todoId, dispatch, store){
    const state = store.getState()
    const lists = allLists(state)

    return lists
      .filter(list => list.tasks.indexOf(todoId) > -1)
      .map(list => dispatch(deleteFromList({ todoId, listId: list.id })))
  }
})
