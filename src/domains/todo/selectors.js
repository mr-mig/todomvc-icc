import { createSelector } from 'reselect'
import { selectEntityFromDomain } from '../../lib/selectorHelpers'

export const allTodos = createSelector(state => state.todos.byOrder, _ => _)

export const getTodoById = selectEntityFromDomain('todos')
