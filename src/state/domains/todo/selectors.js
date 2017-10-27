import { createSelector } from 'reselect'
import { selectEntityFromDomain } from '../../../lib/selectorHelpers'

export const todoIndex = createSelector(state => state.todo, _ => _)
export const allTodoIds = createSelector(todoIndex, index => index.byOrder)
export const allTodoItems = createSelector(todoIndex, index => Object.values(index.byId))
export const getLatestId = createSelector(allTodoIds, ids => ids[ids.length - 1])

export const todoById = selectEntityFromDomain('todo')

export const completedTodoItems = createSelector(
  allTodoItems,
  todos => todos.filter(todo => todo.completed)
)

export const completedCount = createSelector(
  completedTodoItems,
  todos => todos.length
)

export const activeCount = createSelector(
  allTodoItems,
  todos => todos.filter(todo => !todo.completed).length
)

