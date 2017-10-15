import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../filter/constants'
import { todoIndex } from '../todo/selectors'
import { filter } from '../filter/selectors'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export const filteredTodoIds = createSelector(
  todoIndex,
  filter,
  (index, filter) => index.byOrder.filter(id => TODO_FILTERS[filter](index.byId[id]))
)
