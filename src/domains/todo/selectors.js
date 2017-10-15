import { createSelector } from 'reselect'

export const allTodos = createSelector(state => state.todos.byOrder, _ => _)
