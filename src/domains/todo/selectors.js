import { createSelector } from 'reselect'
import { selectEntityFromDomain } from '../../lib/selectorHelpers'

export const todoIndex = createSelector(state => state.todo, _ => _)
export const allTodoIds = createSelector(todoIndex, index => index.byOrder)
export const allTodoItems = createSelector(todoIndex, index => Object.values(index.byId))

export const todoById = selectEntityFromDomain('todo')

export const completedCount = createSelector(
  allTodoItems,
  todos => todos.filter(todo => todo.completed).length
)

export const activeCount = createSelector(
  allTodoItems,
  todos => todos.filter(todo => !todo.completed).length
)

