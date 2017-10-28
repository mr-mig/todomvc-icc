import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../domains/filter/actions'
import { todoIndex } from '../../domains/todo/selectors'
import { listById } from '../../domains/list/selectors'
import { filter } from '../../domains/filter/selectors'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export const filteredTodoIds = createSelector(
  listById,
  todoIndex,
  filter,
  (list, todoIndex, filter) => list.tasks.filter(id => TODO_FILTERS[filter](todoIndex.byId[id]))
)
